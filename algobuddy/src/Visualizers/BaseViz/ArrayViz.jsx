import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import * as d3 from "d3";
import { colours } from "../../Theme/Colours";
import { TransitionQueue } from "../components/TransitionQueue";



const ArrayVisualizer = forwardRef(({ data, speed=1000, title}, ref) => {
    const svgRef = useRef();
    const groupRef = useRef();
    const transformRef = useRef(d3.zoomIdentity);
    const boxesRef = useRef([]);
    const textRef = useRef([]);
    const queueRef = useRef(new TransitionQueue(speed));
    //const subarraysRef = useRef(new Map()); 
    const svgWidthRef = useRef(0);
    const svgHeightRef = useRef(0);


    const BOXWIDTH = 70;
    const BOXHEIGHT = 70;
    const MIDDLEOFARRAY = BOXWIDTH * data.length / 2;
    
    const base = colours.base;

    //SubArrays
    // const getPosition = (id, level) => {
    //   const half = 2**level/2;
    //   const placement = parseInt(id.slice(1), 2) + 1;
    //   const maxLevel = Math.ceil(Math.log2(boxesRef.current.length));
    //   const distancePer = (maxLevel * (maxLevel * 0.05)) / (2**level);
      
    //   const y = svgHeightRef.current * 0.5 - BOXHEIGHT/2 + level * (2 * BOXHEIGHT);
    //   let x = 0;
    //   if (id[0] == "0") {// Right most object on the left
    //     let adjustment = 0;
    //     if (placement == half) {adjustment = (0.5 - ((half - placement + 1) * distancePer)/2)}
    //     else {adjustment = (0.5 - ((half - placement + 1) * distancePer - distancePer/2))}
    //     x = (svgWidthRef.current * (0.1 + 0.8 * adjustment))
    //   } else {
    //     let adjustment = 0;
    //     if (placement == half + 1) {adjustment = (0.5 + ((placement - half) * distancePer)/2)}
    //     else {adjustment = (0.5 + ((placement - half - 1) * distancePer + (distancePer/2)))}
    //     x = (svgWidthRef.current * (0.1 + 0.8 * adjustment));
    //   }
    //   return { x, y };
    // }

    // Allows use of functions in parent component
    useImperativeHandle(ref, () => ({
        setTitle: (text) => { // Changes title
            d3.select(svgRef.current)
              .select(".title")
              .text(text);
          },
          setArray: (newData) => {
            const svg = d3.select(svgRef.current);
            const MIDDLE = BOXWIDTH * newData.length / 2;
          
            boxesRef.current.forEach((box, i) => {
              d3.select(box)
                .attr("x", i * BOXWIDTH + svgWidthRef.current * 0.5 - MIDDLE)
            });
          
            textRef.current.forEach((text, i) => {
              d3.select(text)
                .text(newData[i])
                .attr("x", i * BOXWIDTH + svgWidthRef.current * 0.5 - MIDDLE + BOXWIDTH / 2);
            });
          },          
        setRectColours: (filterFn, color) => { // Changes colour of array boxes depending on filter
          boxesRef.current.forEach((box, i) => {
            if (filterFn(null, i)) {
              d3.select(box).attr("fill", color);
            }
          });
        },
        sleep: (overideMs) => new Promise((resolve) => setTimeout(resolve, (overideMs ?? speed))), // Sleeps code dependong on time
        enqueue: (callback) => {queueRef.current.enqueue(callback)}, // Adds a function to the queue
        clearQueue: () => {queueRef.current.clearQueue()}, // Clears the queue
        swapBoxes: async (i, j) => { // Swaps the boxes in the array (with animation)
            const queuedSpeed = queueRef.current.getLength() == 0 ? speed / 3 : 10
            const boxA = d3.select(boxesRef.current[i]);
            const boxB = d3.select(boxesRef.current[j]);
            const textA = d3.select(textRef.current[i]);
            const textB = d3.select(textRef.current[j]);

            const xA = boxA.attr("x");
            const xB = boxB.attr("x");
            const xTextA = textA.attr("x");
            const xTextB = textB.attr("x");

            boxA.transition().duration(queuedSpeed).attr("x", xB);
            boxB.transition().duration(queuedSpeed).attr("x", xA);
            textA.transition().duration(queuedSpeed).attr("x", xTextB);
            textB.transition().duration(queuedSpeed).attr("x", xTextA);
            
            const temp = boxesRef.current[i];
            boxesRef.current[i] = boxesRef.current[j];
            boxesRef.current[j] = temp;

            const tempText = textRef.current[i];
            textRef.current[i] = textRef.current[j];
            textRef.current[j] = tempText;
        },
        // moveBox: async (id, x, y) => {
        //     const queuedSpeed = queueRef.current.getLength() == 0 ? speed / 3 : 10
        //     const subarray = subarraysRef.current.get(id);
        //     const box = d3.select(subarray.boxes[0]);
        //     const text = d3.select(subarray.text[0]);

        //     box.transition().duration(queuedSpeed).attr("x", x).attr("y", y);
        //     text.transition().duration(queuedSpeed).attr("x", x + BOXWIDTH/2).attr("y", y + BOXHEIGHT / 2); // MIGHT BE WRONG

        //     subarray.position = { x: x, y: y}
        // },
        // subArray(parentId, id, range, level, array) { 
        //   const subGroup = groupRef.current.append("g").attr("class", `subarray-${id}`);
        //   const parentArray = subarraysRef.current.get(parentId);
        //   const { x: parentX, y: parentY } = parentArray.position;
        //   const {x, y} = getPosition(id, level);
          
        //   const boxes = subGroup
        //   .selectAll("rect")
        //   .data(array)
        //   .enter()
        //   .append("rect")
        //     .attr("width", BOXWIDTH)
        //     .attr("height", BOXHEIGHT)
        //     .attr("x", (_, i) => parentX + (i + range[0]) * BOXWIDTH)
        //     .attr("y", parentY)
        //     .attr("fill", base)
        //     .attr("stroke", "black")
        //     .attr("stroke-width", 4)

        //   const texts = subGroup
        //   .selectAll("text")
        //   .data(array)
        //   .enter()
        //   .append("text")
        //       .text((d) => d)
        //       .attr("x", (_, i) => parentX + range[0] * BOXWIDTH - MIDDLEOFARRAY + BOXWIDTH/2)
        //       .attr("y", parentY + BOXHEIGHT / 2)
        //       .attr("text-anchor", "middle")
        //       .attr("alignment-baseline", "middle")
        //       .attr("fill", "white");
          
          
        //   subarraysRef.current.set(
        //     id,
        //     { 
        //       id,
        //       boxes: boxes.nodes(),
        //       text: texts.nodes(),
        //       position: { x: x, y: y },
        //       positionText: { x: x + BOXWIDTH/2, y: y + BOXHEIGHT / 2},
        //       array,
        //       group: subGroup
        //     }
        //   );
          
        //   // Transition
        //   const queuedSpeed = queueRef.current.getLength() == 0 ? speed / 3 : 10
        //   subGroup.transition().duration(queuedSpeed).attr("transform", `translate(${x}, ${y})`);
        // }
    }))

  useEffect(() => {
    const svg = d3.select(svgRef.current); // Base of visualizer
    svg.selectAll("*").remove();

    svgWidthRef.current = svg.node().clientWidth;
    svgHeightRef.current = svg.node().clientHeight;

    // Add zoom behavior to the whole SVG
    const zoom = d3.zoom()
      .scaleExtent([0.5, 5]) // optional, limit zoom in/out
      .on("zoom", (event) => {
        const svg = d3.select(svgRef.current);
        const svgWidth = svg.node().clientWidth;
        const svgHeight = svg.node().clientHeight;

        // Always center the zoom on the SVG center
        const centerX = svgWidth / 2;
        const centerY = svgHeight / 2;

        const currentScale = event.transform.k;

        const transform = d3.zoomIdentity
          .translate(centerX * (1 - currentScale), centerY * (1 - currentScale))
          .scale(currentScale);

        d3.select(groupRef.current).attr("transform", transform);
        transformRef.current = transform;
      });

    svg.call(zoom);

    // Create a group to hold visual elements
    const group = svg.append("g").attr("transform", transformRef.current);
    groupRef.current = group;
    const mainSubGroup = group.append("g").attr("class", "class-0");

    // Boxes
    const boxes = mainSubGroup
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
        .attr("width", BOXWIDTH)
        .attr("height", BOXHEIGHT)
        .attr("x", (_, i) => i * BOXWIDTH + svgWidthRef.current * 0.5 - MIDDLEOFARRAY)
        .attr("y", svgHeightRef.current * 0.5 - BOXHEIGHT/2)
        .attr("fill", base)
        .attr("stroke", "black")
        .attr("stroke-width", 4)
    boxesRef.current = boxes.nodes();
    
    // Nums
    const texts = mainSubGroup
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
        .text((d) => d)
        .attr("x", (_, i) => i * BOXWIDTH + svgWidthRef.current * 0.5 - MIDDLEOFARRAY + BOXWIDTH/2)
        .attr("y", svgHeightRef.current * 0.5)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "white");
    textRef.current = texts.nodes();

    // subarraysRef.current.set(
    //   "0",
    //   {
    //     boxes: boxes.nodes(),
    //     text: texts.nodes(),
    //     position: { x: svgWidthRef.current * 0.5 - MIDDLEOFARRAY, y: svgHeightRef.current * 0.5 - BOXHEIGHT/2 },
    //     positionText: { x: svgWidthRef.current * 0.5 - MIDDLEOFARRAY + BOXWIDTH/2, y: svgHeightRef.current * 0.5},
    //     array: data,
    //     group: mainSubGroup
    //   }
    // );
    
    // Index 
    group
    .selectAll(null)
    .data(data)
    .enter()
    .append("text")
        .text((_, i) => i)
        .attr("x", (_, i) => i * BOXWIDTH + svgWidthRef.current * 0.5 - MIDDLEOFARRAY + BOXWIDTH/2)
        .attr("y", svgHeightRef.current * 0.5 - BOXHEIGHT * 0.75)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "#999")

    // Title
    group.append("text")
        .attr("class", "title")
        .text(title)
        .attr("x", svgWidthRef.current * 0.5)
        .attr("y", svgHeightRef.current * 0.5 - BOXHEIGHT * 1.5)
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
    />
  );
});

export default ArrayVisualizer;