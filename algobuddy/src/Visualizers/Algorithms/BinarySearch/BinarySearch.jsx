import { colours } from "../../../Theme/Colours";

export const applyBinarySearchStep = async (viz, step, args) => {
  const { base, highlight, checking, found, notFound } = colours;
  const { data, target, log } = args;

  if (step.action === "binary_search_start") {
    viz.setRectColours((_, i) => i === i, base);
    viz.setTitle("Binary Search");
    log(`Binary Search started for target: ${target}`);

  } else if (step.action === "check") {
    viz.setRectColours((_, i) => i === i, base);
    viz.setRectColours((_, i) => i >= step.low && i <= step.high, highlight);
    viz.setRectColours((_, i) => i === step.mid, checking);
    viz.setTitle(`${step.value_at_mid} == ${target} ?`);
    log(`Checking mid index ${step.mid}: ${step.value_at_mid} == ${target}?`);

  } else if (step.action === "search_right") {
    viz.setRectColours((_, i) => i <= step.mid, base);
    viz.setRectColours((_, i) => i > step.mid && i <= step.high, highlight);
    viz.setTitle(`${step.value_at_mid} < ${target}`);
    log(`Searching right since ${step.value_at_mid} < ${target}`);

  } else if (step.action === "search_left") {
    viz.setRectColours((_, i) => i >= step.mid, base);
    viz.setRectColours((_, i) => i < step.mid && i >= step.low, highlight);
    viz.setTitle(`${step.value_at_mid} > ${target}`);
    log(`Searching left since ${step.value_at_mid} > ${target}`);

  } else if (step.action === "found") {
    viz.setRectColours((_, i) => i === step.index, found);
    viz.setRectColours((_, i) => i !== step.index, base);
    viz.setTitle(`Found ${step.value}!!`);
    log(`Found ${step.value} at index ${step.index}`);

  } else if (step.action === "not_found") {
    viz.setRectColours((_, i) => i === i, notFound);
    viz.setTitle(`${target} not found`);
    log(`Target ${target} not found in the array`);
  }
};
