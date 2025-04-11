import { colours } from "../../../Theme/Colours";

export const applyHeapSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking } = colours;
  const { data, log } = args;

  if (step.action == "start_sort") {
    viz.setTitle("Heap Sort");
    log("Starting Heap Sort");
    viz.setCircleColours((_, i) => i === i, base);
    viz.clearQueue();

  } else if (step.action == "swap") {
    viz.setTitle(`Swapping ${step.value1} and ${step.value2}`);
    log(`Swapping ${step.value1} (index ${step.index1}) with ${step.value2} (index ${step.index2})`);
    viz.setCircleColours((_, i) => i === i, base);
    viz.setCircleColours((_, i) => i == step.index1 || i == step.index2, checking);
    viz.setArray(step.array);
    viz.enqueue(() => viz.swapBoxes(step.index1, step.index2));
    viz.clearQueue();
    viz.setCircleColours((_, i) => i >= step.smallestSortedIndex, found);

  } else if (step.action == "extract_and_swap") {
    viz.setTitle(`Swapping Root and ${step.value2}`);
    log(`Swapping root with ${step.value2} (index ${step.index2})`);
    viz.setCircleColours((_, i) => i === i, base);
    viz.setCircleColours((_, i) => i == step.index1 || i == step.index2, checking);
    viz.setArray(step.array);
    viz.enqueue(() => viz.swapBoxes(step.index1, step.index2));
    viz.clearQueue();
    viz.setCircleColours((_, i) => i >= step.smallestSortedIndex + 1, found);

  } else if (step.action == "extract_max") {
    viz.setTitle(`${step.fixedValue} is sorted`);
    log(`Extracted max: ${step.fixedValue}`);
    viz.setCircleColours((_, i) => i === i, base);
    viz.setCircleColours((_, i) => i >= step.smallestSortedIndex, found);
    viz.setArray(step.array);
    viz.clearQueue();

  } else if (step.action == "end_sort") {
    viz.setTitle(`Graph is sorted`);
    log("Heap Sort Complete");
    viz.setCircleColours((_, i) => i == i, found);
    viz.setArray(step.array);
    viz.clearQueue();
  }
};
