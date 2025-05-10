import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import * as d3 from "d3";
import { colours } from "../../Theme/Colours";
import { TransitionQueue } from "../components/TransitionQueue";
const GraphVisualizer = forwardRef(({ data, speed=1000, title}, ref) => {
    const svgRef = useRef();
    const groupRef = useRef();
    const transformRef = useRef(d3.zoomIdentity);
    const circlesRef = useRef([]);
    const textRef = useRef([]);
    const queueRef = useRef(new TransitionQueue(speed));

    const LEVELDIFF = 70;
    const CIRCLERADIUS = 30;
    const GraphLevel = (i) => {
      const binary = (i + 1).toString(2);
      return binary.length
    }
    const LevelPlacement = (i) => {
      const binary = (i + 1).toString(2);
      const number = parseInt(binary.slice(1), 2);
      return number + 1;
    }
    const MaxLevel = () => {
      const binary = (data.length).toString(2);
      return binary.length;
    }
    const base = colours.base;
    const GetXAxis = (i, svgWidth) => {
      if (i == 0) return svgWidth * 0.5;
          const level = GraphLevel(i);
          const placement = LevelPlacement(i);
          const maxLevel = MaxLevel();
          const half = 2**(level-1)/2;
          const distancePer = (maxLevel * (maxLevel * 0.05)) / (2**(level-1));
          if (placement <= half) {
            let adjustment = 0;
            if (placement == half) {adjustment = (0.5 - ((half - placement + 1) * distancePer)/2)}
            else {adjustment = (0.5 - ((half - placement + 1) * distancePer - distancePer/2))}
            const xDiff = (svgWidth * (0.1 + 0.8 * adjustment));
            return xDiff;

          } else {
            let adjustment = 0;
            if (placement == half + 1) {adjustment = (0.5 + ((placement - half) * distancePer)/2)}
            else {adjustment = (0.5 + ((placement - half - 1) * distancePer + (distancePer/2)))}
            const xDiff = (svgWidth * (0.1 + 0.8 * adjustment));
            return xDiff;
          }
    }
    const GetYAXis = (i) => {
      return GraphLevel(i) * LEVELDIFF + 60
    }

    // Allows use of functions in parent component
    useImperativeHandle(ref, () => ({
        setTitle: (text) => { // Changes title
            d3.select(svgRef.current)
              .select(".title")
              .text(text);
          },
          setArray: (newData) => {
            const svg = d3.select(svgRef.current);
            const svgWidth = svg.node().clientWidth;
          
            circlesRef.current.forEach((circle, i) => {
              const cx = GetXAxis(i, svgWidth);
              const cy = GetYAXis(i);
              d3.select(circle)
              .attr("cx", cx)
              .attr("cy", cy);
            });
          
            textRef.current.forEach((text, i) => {
              const cx = GetXAxis(i, svgWidth);
              const cy = GetYAXis(i);
              d3.select(text)
                .text(newData[i])
                .attr("x", cx)
                .attr("y", cy);
            });
          },          
        setCircleColours: (filterFn, color) => { // Changes colour of array boxes depending on filter
          circlesRef.current.forEach((circle, i) => {
            if (filterFn(null, i)) {
              d3.select(circle).attr("fill", color);
            }
          });
        },
        sleep: (overideMs) => new Promise((resolve) => setTimeout(resolve, (overideMs ?? speed))), // Sleeps code dependong on time
        enqueue: (callback) => {queueRef.current.enqueue(callback)}, // Adds a function to the queue
        clearQueue: () => {queueRef.current.clearQueue()}, // Clears the queue
        swapBoxes: async (i, j) => { // Swaps the boxes in the array (with animation)
            const queuedSpeed = queueRef.current.getLength() == 0 ? speed / 3 : 0
            const boxA = d3.select(circlesRef.current[i]);
            const boxB = d3.select(circlesRef.current[j]);
            const textA = d3.select(textRef.current[i]);
            const textB = d3.select(textRef.current[j]);

            const xA = boxA.attr("cx");
            const yA = boxA.attr("cy");
            const xB = boxB.attr("cx");
            const yB = boxB.attr("cy");
            const xTextA = textA.attr("x");
            const yTextA = textA.attr("y");
            const xTextB = textB.attr("x");
            const yTextB = textB.attr("y");

            boxA.transition().duration(queuedSpeed).attr("cx", xB).attr("cy", yB);
            boxB.transition().duration(queuedSpeed).attr("cx", xA).attr("cy", yA);
            textA.transition().duration(queuedSpeed).attr("x", xTextB).attr("y", yTextB)
            textB.transition().duration(queuedSpeed).attr("x", xTextA).attr("y", yTextA);
            
            const temp = circlesRef.current[i];
            circlesRef.current[i] = circlesRef.current[j];
            circlesRef.current[j] = temp;

            const tempText = textRef.current[i];
            textRef.current[i] = textRef.current[j];
            textRef.current[j] = tempText;
        }
    }))

  useEffect(() => {
    const svg = d3.select(svgRef.current); // Base of visualizer
    svg.selectAll("*").remove();

    const svgWidth = svg.node().clientWidth;
    const svgHeight = svg.node().clientHeight;

    // Add zoom behavior to the whole SVG
    const zoom = d3.zoom()
    .scaleExtent([0.5, 5])
    .on("zoom", (event) => {
      d3.select(groupRef.current).attr("transform", event.transform);
      transformRef.current = event.transform;
    });

    svg.call(zoom);

    // Create a group to hold visual elements
    const group = svg.append("g").attr("transform", transformRef.current);
    groupRef.current = group.node();

    // Boxes
    const circles = group
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
        .attr("cx", (_, i) => GetXAxis(i, svgWidth))      
        .attr("cy", (_, i) => GetYAXis(i))
        .attr("r", CIRCLERADIUS)
        .attr("fill", base)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
    circlesRef.current = circles.nodes();
    
    // Lines
    for (let i = 0; i < data.length; i++) {
      const leftIndex = 2 * i + 1;
      const rightIndex = 2 * i + 2;
    
      const parent = d3.select(circlesRef.current[i]);
      const x1 = +parent.attr("cx");
      const y1 = +parent.attr("cy");
    
      if (leftIndex < data.length) {
        const left = d3.select(circlesRef.current[leftIndex]);
        const x2 = +left.attr("cx");
        const y2 = +left.attr("cy");
    
        group.append("line")
          .attr("x1", x1)
          .attr("y1", y1)
          .attr("x2", x2)
          .attr("y2", y2)
          .attr("stroke", "#888")
          .attr("stroke-width", 2)
          .lower();
      }
    
      if (rightIndex < data.length) {
        const right = d3.select(circlesRef.current[rightIndex]);
        const x2 = +right.attr("cx");
        const y2 = +right.attr("cy");
    
        group.append("line")
          .attr("x1", x1)
          .attr("y1", y1)
          .attr("x2", x2)
          .attr("y2", y2)
          .attr("stroke", "#888")
          .attr("stroke-width", 2)
          .lower();
      }
    }

    const texts = group
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
        .text((d) => d)
        .attr("x", (_, i) => GetXAxis(i, svgWidth))
        .attr("y", (_, i) => GetYAXis(i))
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "white");
    textRef.current = texts.nodes();
    

    // Title
    group.append("text")
        .attr("class", "title")
        .text(title)
        .attr("x", svgWidth * 0.5)
        .attr("y", 60)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "gray")
        .attr("font-size", 30);

  }, [data, speed]);


  return (
    <svg
      ref={svgRef}
      width="55vw"
      height="50vh"
      className="bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-t-xl"
      style={{
        cursor: "grab",
      }}
      className="bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-t-xl"
    />
  );
});

export default GraphVisualizer;