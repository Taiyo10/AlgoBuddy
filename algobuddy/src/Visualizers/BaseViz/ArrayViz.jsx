import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import * as d3 from "d3";
import { colours } from "../../Theme/Colours";
const ArrayVisualizer = forwardRef(({ data, speed=1000, title}, ref) => {
    const svgRef = useRef();
    const groupRef = useRef();
    const arrowRef = useRef(null);
    const transformRef = useRef(d3.zoomIdentity);

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
        setRectColours: (filterFn, color) => {
            d3.select(svgRef.current)
            .selectAll("rect")
            .filter(filterFn)
            .attr("fill", color);
        },
        sleep: (overideMs) => new Promise((resolve) => setTimeout(resolve, (overideMs ?? speed))),
        drawArrow: (text, ini_index=0, color = "red", scale = 0.6) => {
            return arrowRef.current(text, ini_index, color, scale);
        },
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
    group
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

    arrowRef.current = (text = "", ini_index=0, color = "red", scale = 0.6) => {
        const group = d3.select(groupRef.current);  
        
        const tipx = 10 * scale;
        const tipy = 60 * scale;
        const font_size = 20;
        const x = svgWidth * 0.5 + BOXWIDTH / 2 - MIDDLEOFARRAY
        const y = svgHeight * 0.5 + BOXHEIGHT / 2

        const arrowX = x - tipx
        const arrowY = y + tipy + 10;
        const textY = y + tipy + font_size + 10
    
        const path = group.append("path")
            .attr("d", "M0,0 L40,0 L40,-10 L60,10 L40,30 L40,20 L0,20 Z")
            .attr("fill", color)
            .attr("transform", `translate(${arrowX+ ini_index * BOXWIDTH}, ${arrowY}) rotate(-90) scale(${scale})`)
            //.attr("visibility", "hidden")
        const textElement = group.append("text")
            .text(text)
            .attr("y", textY)
            .attr("fill", color)
            .attr("font-size", font_size)
            //.attr("visibility", "hidden")
    
        // Adjust x position to move text to the left by half its width
        const textWidth = textElement.node().getBBox().width;
        const textX = x - textWidth / 2;
        textElement.attr("x", textX + ini_index * BOXWIDTH);
    
        const moveToIndex = (index, duration = speed/2) => {
            path.transition()
                .duration(duration)
                .attr("transform", `translate(${arrowX + index * BOXWIDTH}, ${arrowY}) rotate(-90) scale(${scale})`);
        
                textElement.transition()
                .duration(duration)
                .attr("x", textX + index * BOXWIDTH)
            };
        
        return {moveToIndex, path, text:textElement};
    }}, [data, speed]);


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
