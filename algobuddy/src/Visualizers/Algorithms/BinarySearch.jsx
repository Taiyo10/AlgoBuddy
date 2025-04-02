export const applyBinarySearchStep = async (viz, data, target, step, speedRef) => {
    const base_colour = "#555";
    const highlight_colour = "#00f";
    const found_colour = "#0d0";
    const checking_colour = "#900";
    
  
    if (step.action === "binary_search_start") {
      viz.setRectColours((_, i) => i === i, highlight_colour);
      viz.setTitle("Binary Search");

    } else if (step.action === "check") {
      viz.setRectColours((_, i) => i === i, base_colour);
      viz.setRectColours((_, i) => i  >= step.low && i <= step.high, highlight_colour);
      viz.setRectColours((_, i) => i === step.mid, checking_colour);
      viz.setTitle(`${step.value_at_mid} == ${target} ?`);

    } else if (step.action === "search_right") {
      viz.setRectColours((_, i) => i <= step.mid, base_colour);
      viz.setRectColours((_, i) => i > step.mid && i <= step.high, highlight_colour);
      viz.setTitle(`${step.value_at_mid} < ${target}`);

    } else if (step.action === "search_left") {
      viz.setRectColours((_, i) => i >= step.mid, base_colour);
      viz.setRectColours((_, i) => i < step.mid && i >= step.low, highlight_colour);
      viz.setTitle(`${step.value_at_mid} > ${target}`);
      
    } else if (step.action === "found") {
      viz.setRectColours((_, i) => i === step.index, found_colour);
      viz.setRectColours((_, i) => i !== step.index, base_colour);
      viz.setTitle(`Found ${step.value}!!`);
    }
  };
  