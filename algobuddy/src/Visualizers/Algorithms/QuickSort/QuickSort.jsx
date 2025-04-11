import { colours } from "../../../Theme/Colours";

export const applyQuickSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking, pivot } = colours;
  const { log } = args;

  if (step.action === "quick_sort_call") {
    viz.setTitle(`Quick Sort on [${step.subarray.join(", ")}]`);
    log(`Quick Sort call on subarray [${step.subarray.join(", ")}] (low=${step.low}, high=${step.high})`);
    viz.setRectColours(() => true, base);
    viz.setArray(step.array);
    viz.clearQueue();
  }

  else if (step.action === "pivot_chosen") {
    viz.setTitle(`Pivot chosen: ${step.pivot_value} (index ${step.pivot_index})`);
    log(`Pivot chosen: ${step.pivot_value} at index ${step.pivot_index}`);
    viz.setArray(step.array);
    viz.setRectColours(() => true, base);
    viz.setRectColours((_, i) => i === step.pivot_index, pivot);
  }

  else if (step.action === "compare") {
    viz.setTitle(
      `Comparing ${step.current_value} (index ${step.current_index}) with pivot ${step.pivot_value}`
    );
    log(`Comparing ${step.current_value} (index ${step.current_index}) with pivot ${step.pivot_value}`);
    viz.setArray(step.array);
    viz.setRectColours(() => true, base);
    viz.setRectColours((_, i) => i === step.pivot_index, pivot);
    viz.setRectColours((_, i) => i === step.current_index, checking);
  }

  else if (step.action === "swap") {
    const [i, j] = step.indices;
    viz.setTitle(`Swapping ${step.values[0]} (index ${i}) and ${step.values[1]} (index ${j})`);
    log(`Swapping ${step.values[0]} (index ${i}) with ${step.values[1]} (index ${j})`);
    viz.setArray(step.array);
    viz.setRectColours(() => true, base);
    viz.setRectColours((_, idx) => idx === step.pivot_index, pivot);
    viz.setRectColours((_, idx) => idx === i || idx === j, checking);
    viz.enqueue(() => viz.swapBoxes(i, j));
  }

  else if (step.action === "no_swap") {
    viz.setTitle(`No swap for index ${step.current_index} (${step.current_value})`);
    log(`No swap: ${step.current_value} (index ${step.current_index}) >= pivot ${step.pivot_value}`);
    viz.setArray(step.array);
    viz.setRectColours(() => true, base);
    viz.setRectColours((_, i) => i === step.pivot_index, pivot);
    viz.setRectColours((_, i) => i === step.current_index, highlight);
  }

  else if (step.action === "partition_complete") {
    viz.setTitle(`Partition complete, pivot at index ${step.pivot_index}`);
    log(`Partition complete, pivot positioned at index ${step.pivot_index}`);
    viz.setArray(step.array);
    viz.setRectColours(() => true, base);
    viz.setRectColours((_, i) => i === step.pivot_index, found);
    viz.clearQueue();
  }

  else if (step.action === "number_sorted") {
    viz.setTitle(`Number sorted: ${step.value} (index ${step.index})`);
    log(`Sorted: ${step.value} at index ${step.index}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => i === step.index, found);
  }

  else if (step.action === "quick_sort_no_action") {
    viz.setTitle(`No action for [${step.subarray.join(", ")}]`);
    log(`No sorting needed for subarray [${step.subarray.join(", ")}]`);
    viz.setArray(step.array);
    viz.setRectColours(() => true, base);
  }

  else if (step.action === "quick_sort_end") {
    viz.setTitle(`Quick Sort Complete`);
    log(`Quick Sort complete: [${step.array.join(", ")}]`);
    viz.setArray(step.array);
    viz.setRectColours(() => true, found);
    viz.clearQueue();
  }
};
