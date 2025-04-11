import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import * as d3 from "d3";
import { colours } from "../../Theme/Colours";
import { TransitionQueue } from "../components/TransitionQueue";

const BarChartVisualizer = forwardRef(({ data, speed = 1000, title }, ref) => {
  const svgRef = useRef();
  const groupRef = useRef();
  const transformRef = useRef(d3.zoomIdentity);
  const barsRef = useRef([]);  // references to bar <rect> elements
  const textRef = useRef([]);  // references to text elements
  const queueRef = useRef(new TransitionQueue(speed));

  // Fixed geometry settings.
  const barWidth = 40;        // fixed width of each bar
  const padding = 5;          // spacing between bars
  const topMargin = 80;       // extra top margin to leave room for the title
  const bottomMargin = 20;    // bottom margin
  const extraHeight = 10;     // additional constant height for every bar

  useImperativeHandle(ref, () => ({
    setTitle: (newTitle) => {
      d3.select(svgRef.current)
        .select(".title")
        .text(newTitle);
    },
    setArray: (newData) => {
      const svg = d3.select(svgRef.current);
      const svgWidth = svg.node().clientWidth;
      const svgHeight = svg.node().clientHeight;
      const n = newData.length;
      const totalChartWidth = n * barWidth + (n - 1) * padding;
      const offsetX = (svgWidth - totalChartWidth) / 2;

      // Calculate min and max from the data.
      const minVal = d3.min(newData);
      const maxVal = d3.max(newData);
      // Using range = maxVal - minVal or 1 if they're equal.
      const range = maxVal === minVal ? 1 : maxVal - minVal;
      const usableHeight = svgHeight - topMargin - bottomMargin;
      
      // Create a linear y-scale mapping [0, range] to [0, usableHeight].
      const yScale = d3.scaleLinear()
        .domain([0, range])
        .range([0, usableHeight]);

      // Update bars: For each newData value, shift it so the minimum becomes 0,
      // compute a bar height, then add the extraHeight.
      barsRef.current.forEach((bar, i) => {
        const shiftedValue = newData[i] - minVal;  // shift data so min becomes 0
        const barHeight = yScale(shiftedValue) + extraHeight;
        const x = offsetX + i * (barWidth + padding);
        const y = svgHeight - bottomMargin - barHeight;

        d3.select(bar)
          .transition()
          .duration(300)
          .attr("x", x)
          .attr("y", y)
          .attr("width", barWidth)
          .attr("height", barHeight);
      });

      // Update the text labels: Position them above the bar.
      textRef.current.forEach((text, i) => {
        const shiftedValue = newData[i] - minVal;
        const barHeight = yScale(shiftedValue) + extraHeight;
        const x = offsetX + i * (barWidth + padding) + barWidth / 2;
        const y = svgHeight - bottomMargin - barHeight - 5; // a few pixels above the top of the bar
        d3.select(text)
          .transition()
          .duration(300)
          .attr("x", x)
          .attr("y", y)
          .text(newData[i]);
      });
    },
    setRectColours: (filterFn, color) => {
      barsRef.current.forEach((bar, i) => {
        if (filterFn(null, i)) {
          d3.select(bar).attr("fill", color);
        }
      });
    },
    sleep: (overrideMs) =>
      new Promise((resolve) => setTimeout(resolve, overrideMs ?? speed)),
    enqueue: (callback) => {
      queueRef.current.enqueue(callback);
    },
    clearQueue: () => {
      queueRef.current.clearQueue();
    },
    swapBoxes: async (i, j) => {
      // Swap the x positions of the bars (and texts) at indices i, j.
      const svg = d3.select(svgRef.current);
      const svgWidth = svg.node().clientWidth;
      const n = data.length;
      const totalChartWidth = n * barWidth + (n - 1) * padding;
      const offsetX = (svgWidth - totalChartWidth) / 2;

      const barA = d3.select(barsRef.current[i]);
      const barB = d3.select(barsRef.current[j]);
      const textA = d3.select(textRef.current[i]);
      const textB = d3.select(textRef.current[j]);

      const xA = offsetX + i * (barWidth + padding);
      const xB = offsetX + j * (barWidth + padding);

      barA.transition().duration(speed / 2).attr("x", xB);
      barB.transition().duration(speed / 2).attr("x", xA);
      textA.transition().duration(speed / 2).attr("x", xB + barWidth / 2);
      textB.transition().duration(speed / 2).attr("x", xA + barWidth / 2);

      const temp = barsRef.current[i];
      barsRef.current[i] = barsRef.current[j];
      barsRef.current[j] = temp;

      const tempText = textRef.current[i];
      textRef.current[i] = textRef.current[j];
      textRef.current[j] = tempText;
    }
    
  }));

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const svgWidth = svg.node().clientWidth;
    const svgHeight = svg.node().clientHeight;

    // Set up zoom behavior.
    const zoom = d3.zoom()
    .scaleExtent([0.5, 5])
    .on("zoom", (event) => {
      d3.select(groupRef.current).attr("transform", event.transform);
      transformRef.current = event.transform;
    });
    svg.call(zoom);

    // Create a group for all elements.
    const group = svg.append("g").attr("transform", transformRef.current);
    groupRef.current = group.node();

    // Compute total chart width and offset to center the chart.
    const n = data.length;
    const totalChartWidth = n * barWidth + (n - 1) * padding;
    const offsetX = (svgWidth - totalChartWidth) / 2;

    // Compute min and max values.
    const minVal = d3.min(data);
    const maxVal = d3.max(data);
    const range = maxVal === minVal ? 1 : maxVal - minVal;
    const usableHeight = svgHeight - topMargin - bottomMargin;
    // Set up a linear scale for bar heights based on the data range.
    const yScale = d3.scaleLinear()
      .domain([0, range])
      .range([0, usableHeight]);

    // Draw bars: each bar's height is computed from the shifted value plus a constant extra height.
    const bars = group
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (_, i) => offsetX + i * (barWidth + padding))
      .attr("y", (d) => {
        const shiftedValue = d - minVal;
        const barHeight = yScale(shiftedValue) + extraHeight;
        return svgHeight - bottomMargin - barHeight;
      })
      .attr("width", barWidth)
      .attr("height", (d) => {
        const shiftedValue = d - minVal;
        return yScale(shiftedValue) + extraHeight;
      })
      .attr("fill", colours.base)
      .attr("stroke", "black")
      .attr("stroke-width", 2);
    barsRef.current = bars.nodes();

    // Draw text labels (optional).
    const texts = group
      .selectAll("text.value")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "value")
      .text((d) => d)
      .attr("x", (_, i) => offsetX + i * (barWidth + padding) + barWidth / 2)
      .attr("y", (d) => {
        const shiftedValue = d - minVal;
        const barHeight = yScale(shiftedValue) + extraHeight;
        return svgHeight - bottomMargin - barHeight - 5;
      })
      .attr("text-anchor", "middle")
      .attr("fill", "white");
    textRef.current = texts.nodes();

    // Draw title text.
    group
      .append("text")
      .attr("class", "title")
      .text(title)
      .attr("x", svgWidth / 2)
      .attr("y", topMargin / 2) // Positioned in the upper half of the top margin
      .attr("text-anchor", "middle")
      .attr("fill", "dark")
      .attr("font-size", 30);
  }, [data, speed]);

  return (
    <svg
      ref={svgRef}
      width="55vw"
      height="50vh"
      className="bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-t-xl"
      style={{
        cursor: "grab"
      }}
      className="bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-t-xl"
    />
  );
});

export default BarChartVisualizer;
