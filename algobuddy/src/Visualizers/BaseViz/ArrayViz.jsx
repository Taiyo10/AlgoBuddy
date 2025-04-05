import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import * as d3 from "d3";
import { colours } from "../../Theme/Colours";
const ArrayVisualizer = forwardRef(({ data, speed=1000, title}, ref) => {
    const svgRef = useRef();
    const groupRef = useRef();
    const transformRef = useRef(d3.zoomIdentity);
    const boxesRef = useRef([]);
    const textRef = useRef([]);

    const BOXWIDTH = 70;
    const BOXHEIGHT = 70;
    const MIDDLEOFARRAY = BOXWIDTH * data.length / 2;
    
    const base = colours.base;

    // Allows use of functions in parent component
    useImperativeHandle(ref, () => ({
        setTitle: (text) => {
            d3.select(svgRef.current)
              .select(".title")
              .text(text);
          },
        setArray: (newData) => {
            data = newData;
        },
        setRectColours: (filterFn, color) => {
            d3.select(svgRef.current)
            .selectAll("rect")
            .filter(filterFn)
            .attr("fill", color);
        },
        sleep: (overideMs) => new Promise((resolve) => setTimeout(resolve, (overideMs ?? speed))),
        swapBoxes: async (i, j) => {
            const boxA = d3.select(boxesRef.current[i]);
            const boxB = d3.select(boxesRef.current[j]);
            const textA = d3.select(textRef.current[i]);
            const textB = d3.select(textRef.current[j]);

            const xA = boxA.attr("x");
            const xB = boxB.attr("x");
            const xTextA = textA.attr("x");
            const xTextB = textB.attr("x");

            const transitionPromise = (item, newX) =>
              new Promise((resolve) =>
                item
                  .transition()
                  .duration(speed/2)
                  .attr("x", newX)
                  .on("end", resolve)
              );
          
            await Promise.all([
              transitionPromise(boxA, xB),
              transitionPromise(boxB, xA),
              transitionPromise(textA, xTextB),
              transitionPromise(textB, xTextA),
            ]);
            
            const temp = boxesRef.current[i];
            boxesRef.current[i] = boxesRef.current[j];
            boxesRef.current[j] = temp;

            const tempText = textRef.current[i];
            textRef.current[i] = textRef.current[j];
            textRef.current[j] = tempText;
        }
    }))

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const svgWidth = svg.node().clientWidth;
    const svgHeight = svg.node().clientHeight;

    // Add zoom behavior to the whole SVG
    const zoom = d3.zoom().on("zoom", (event) => {
      d3.select(groupRef.current).attr("transform", event.transform);
      transformRef.current = event.transform;
    });

    svg.call(zoom);

    // Create a group that can be zoomed/panned
    const group = svg.append("g").attr("transform", transformRef.current);
    groupRef.current = group.node();

    // Boxes
    const boxes = group
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
        .attr("width", BOXWIDTH)
        .attr("height", BOXHEIGHT)
        .attr("x", (_, i) => i * BOXWIDTH + svgWidth * 0.5 - MIDDLEOFARRAY)
        .attr("y", svgHeight * 0.5 - BOXHEIGHT/2)
        .attr("fill", base)
        .attr("stroke", "black")
        .attr("stroke-width", 4)
    boxesRef.current = boxes.nodes();
    
    // Nums
    const texts = group
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
        .text((d) => d)
        .attr("x", (_, i) => i * BOXWIDTH + svgWidth * 0.5 - MIDDLEOFARRAY + BOXWIDTH/2)
        .attr("y", svgHeight * 0.5)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "white");
    textRef.current = texts.nodes();

    // Index 
    group
    .selectAll(null)
    .data(data)
    .enter()
    .append("text")
        .text((_, i) => i)
        .attr("x", (_, i) => i * BOXWIDTH + svgWidth * 0.5 - MIDDLEOFARRAY + BOXWIDTH/2)
        .attr("y", svgHeight * 0.5 - BOXHEIGHT * 0.75)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "#999")

    // Title
    group.append("text")
        .attr("class", "title")
        .text(title)
        .attr("x", svgWidth * 0.5)
        .attr("y", svgHeight * 0.5 - BOXHEIGHT * 1.5)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "white")
        .attr("font-size", 30);

  }, [data, speed]);


  return (
    <svg
      ref={svgRef}
      width="100vw"
      height="70vh"
      style={{
        backgroundColor: "#333",
        cursor: "grab",
      }}
    />
  );
});

export default ArrayVisualizer;
