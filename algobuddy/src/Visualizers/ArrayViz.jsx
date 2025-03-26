import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { drawArrow } from "./components/arrow";

const ArrayVisualizer = ({ data, algo='binarySearch' }) => {
    const svgRef = useRef();
    const groupRef = useRef();

    const BOXWIDTH = 70;
    const BOXHEIGHT = 70;
    const MIDDLEOFARRAY = BOXWIDTH * data.length / 2;

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const svgWidth = svg.node().clientWidth;
    const svgHeight = svg.node().clientHeight;

    // Add zoom behavior to the whole SVG
    const zoom = d3.zoom().on("zoom", (event) => {
      d3.select(groupRef.current).attr("transform", event.transform);
    });

    svg.call(zoom);

    // Create a group that can be zoomed/panned
    const group = svg.append("g").attr("transform", `translate(50vw, 50vh)`);
    groupRef.current = group.node();

    // Boxes
    group
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
        .attr("width", BOXWIDTH)
        .attr("height", BOXHEIGHT)
        .attr("x", (_, i) => i * BOXWIDTH + svgWidth * 0.5 - MIDDLEOFARRAY)
        .attr("y", svgHeight * 0.5 - BOXHEIGHT/2)
        .attr("fill", "#555")
        .attr("stroke", "black")
        .attr("stroke-width", 4)
    
    // Nums
    group
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

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


    const visualizeBinarySearch = async () => {
        const {moveToIndex: lowMove} = drawArrow(
            group,
            "low",
            svgWidth * 0.5 + BOXWIDTH / 2 - MIDDLEOFARRAY,
            svgHeight * 0.5 + BOXHEIGHT / 2,
        );
        for (let i = 0; i < 100; i++) {
            lowMove(6)
            await sleep(500);
            lowMove(0)
            await sleep(500);
        }
      };
  
    if (algo === "binarySearch") {
    visualizeBinarySearch();
    }
   })

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
};

export default ArrayVisualizer;
