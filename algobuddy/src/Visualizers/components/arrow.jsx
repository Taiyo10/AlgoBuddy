export function drawArrow(group, text = "", x, y, color = "red", scale = 0.6) {
    const tipx = 10 * scale;
    const tipy = 60 * scale;
    const font_size = 20;
    const BOXWIDTH = 70;

    const arrowX = x - tipx
    const arrowY = y + tipy + 10;
    const textY = y + tipy + font_size + 10

    const path = group.append("path")
      .attr("d", "M0,0 L40,0 L40,-10 L60,10 L40,30 L40,20 L0,20 Z")
      .attr("fill", color)
      .attr("x", arrowX)
      .attr("y", arrowY)
      .attr("transform", `translate(${arrowX}, ${arrowY}) rotate(-90) scale(${scale})`);

    const textElement = group.append("text")
        .text(text)
        .attr("y", textY)
        .attr("fill", color)
        .attr("font-size", font_size);

    // Adjust x position to move text to the left by half its width
    const textWidth = textElement.node().getBBox().width;
    const textX = x - textWidth / 2;
    textElement.attr("x", textX);

    const moveToIndex = (index, duration = 500) => {
        path.transition()
          .duration(duration)
          .attr("transform", `translate(${arrowX + index * BOXWIDTH}, ${arrowY}) rotate(-90) scale(${scale})`);
    
        textElement.transition()
          .duration(duration)
          .attr("x", textX + index * BOXWIDTH)

      };
    
    return {moveToIndex};
}