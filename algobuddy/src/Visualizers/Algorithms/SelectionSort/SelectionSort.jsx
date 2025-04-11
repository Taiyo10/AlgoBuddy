import { colours } from "../../../Theme/Colours";

export const applySelectionSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking } = colours;
  const { data, log } = args; // log is the external logging function

  // Helper: applies step-specific colors and then re-applies the "found" (sorted) color for indices < step.iteration.
  const applyColorsWithFoundLast = (callback) => {
    viz.setRectColours((_, i) => true, base);
    callback();
    if (typeof step.iteration === "number") {
      viz.setRectColours((_, i) => i < step.iteration, found);
    }
  };

  if (step.action === "start_sort") {
    log({ action: "start_sort", message: "Selection Sort started", array: step.array });
    viz.setRectColours((_, i) => true, base);
    viz.setArray(step.array);
    viz.clearQueue();
    if (typeof step.iteration === "number") {
      viz.setRectColours((_, i) => i < step.iteration, found);
    }
  }
  else if (step.action === "iteration_start") {
    log({ action: "iteration_start", message: `Iteration ${step.iteration}`, iteration: step.iteration, array: step.array });
    viz.setRectColours((_, i) => true, base);
    if (typeof step.iteration === "number") {
      viz.setRectColours((_, i) => i < step.iteration, found);
    }
    viz.setArray(step.array);
  }
  else if (step.action === "select_initial_min") {
    log({
      action: "select_initial_min",
      message: `Initial min: index ${step.index} (${step.value})`,
      index: step.index,
      value: step.value,
      iteration: step.iteration,
      array: step.array
    });
    applyColorsWithFoundLast(() => {
      viz.setRectColours((_, i) => i === step.index, checking);
    });
    viz.setRectColours((_, i) => i < step.iteration, found);
  }
  else if (step.action === "compare") {
    log({
      action: "compare",
      message: `Comparing ${step.value1} (index ${step.index1}) with ${step.value2} (index ${step.index2})`,
      index1: step.index1,
      value1: step.value1,
      index2: step.index2,
      value2: step.value2,
      iteration: step.iteration,
      array: step.array
    });
    applyColorsWithFoundLast(() => {
      viz.setRectColours((_, i) => i === step.index1 || i === step.index2, checking);
      viz.setRectColours((_, i) => i > step.index2, highlight);
    });
    viz.setArray(step.array);
    viz.setRectColours((_, i) => i < step.iteration, found);
  }
  else if (step.action === "new_min_found") {
    log({
      action: "new_min_found",
      message: `New min found at index ${step.min_index} (${step.min_value})`,
      min_index: step.min_index,
      min_value: step.min_value,
      iteration: step.iteration,
      array: step.array
    });
    applyColorsWithFoundLast(() => {
      viz.setRectColours((_, i) => i === step.min_index, checking);
    });
    viz.setRectColours((_, i) => i < step.iteration, found);
  }
  else if (step.action === "swap") {
    log({
      action: "swap",
      message: `Swapping ${step.value1} and ${step.value2}`,
      index1: step.index1,
      value1: step.value1,
      index2: step.index2,
      value2: step.value2,
      iteration: step.iteration,
      array_before_swap: step.array_before_swap
    });
    viz.setArray(step.array_before_swap);
    applyColorsWithFoundLast(() => {
      viz.setRectColours((_, i) => i === step.index1 || i === step.index2, checking);
      viz.setRectColours((_, i) => i > step.index2, highlight);
    });
    viz.setRectColours((_, i) => i < step.iteration, found);
    await viz.swapBoxes(step.index1, step.index2);
  }
  else if (step.action === "swap_complete") {
    log({
      action: "swap_complete",
      message: "Swap complete",
      iteration: step.iteration,
      array_after_swap: step.array_after_swap
    });
    viz.setArray(step.array_after_swap);
    viz.setRectColours((_, i) => i < step.iteration, found);
    applyColorsWithFoundLast(() => {
      // No extra override beyond already sorted.
    });
  }
  else if (step.action === "sorted") {
    log({
      action: "sorted",
      message: "Sorting Complete",
      sorted_array: step.sorted_array
    });
    viz.setArray(step.sorted_array);
    viz.setRectColours((_, i) => true, found);
    viz.clearQueue();
  }
};
