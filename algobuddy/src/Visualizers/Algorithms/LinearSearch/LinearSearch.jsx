import { colours } from "../../../Theme/Colours";

export const applyLinearSearchStep = async (viz, step, args) => {
  const { base, highlight, found, checking, notFound } = colours;
  const { data, target, log } = args;

  if (step.action === "start_search") {
    log("Starting Linear Search");
    viz.setRectColours((_, i) => i === i, highlight);
    viz.setTitle("Linear Search");

  } else if (step.action === "check") {
    log(`Checking index ${step.index}: ${step.value} == ${target}`);
    viz.setRectColours((_, i) => i < step.index, base);
    viz.setRectColours((_, i) => i === step.index, checking);
    viz.setRectColours((_, i) => i > step.index, highlight);
    viz.setTitle(`Checking ${step.value} == ${target}`);

  } else if (step.action === "found") {
    log(`Found ${step.value} at index ${step.index}`);
    viz.setRectColours((_, i) => i === step.index, found);
    viz.setRectColours((_, i) => i !== step.index, base);
    viz.setTitle(`Found ${step.value}!!`);

  } else if (step.action === "not_found") {
    log(`${target} not found in array`);
    viz.setRectColours((_, i) => i === i, notFound);
    viz.setTitle(`${target} not found`);
  }
};
