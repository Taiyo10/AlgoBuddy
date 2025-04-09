import { colours } from "../../../Theme/Colours";

export const applySelectionSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking } = colours;
  const { data } = args;

  if (step.action === "start_sort") {
    viz.setTitle("Selection Sort");
    viz.setRectColours((_, i) => i === i, base);
    viz.setArray(step.array);
    viz.clearQueue();
  }
  else if (step.action === "iteration_start") {
    viz.setTitle(`Iteration ${step.iteration}`);
    // Set all boxes to base first...
    viz.setRectColours((_, i) => i === i, base);
    // ...then mark indices before current iteration as 'found'
    viz.setRectColours((_, i) => i < step.iteration, found);
    viz.setArray(step.array);
  }
  else if (step.action === "select_initial_min") {
    viz.setTitle(`Initial min: index ${step.index} (${step.value})`);
    viz.setRectColours((_, i) => i === step.index, checking);
  }
  else if (step.action === "compare") {
    viz.setTitle(`Comparing ${step.value1} (index ${step.index1}) with ${step.value2} (index ${step.index2})`);
    // First, all elements get the base color
    viz.setRectColours((_, i) => i === i, base);
    // Then, set elements before the current min index to base
    viz.setRectColours((_, i) => i < step.index1, base);
    // Mark the two elements being compared as 'checking'
    viz.setRectColours((_, i) => i === step.index1 || i === step.index2, checking);
    // Optionally, mark elements after index2 as highlight (you can adjust as needed)
    viz.setRectColours((_, i) => i > step.index2, highlight);
    viz.setArray(step.array);
  }
  else if (step.action === "new_min_found") {
    viz.setTitle(`New min found at index ${step.min_index} (${step.min_value})`);
    viz.setRectColours((_, i) => i === step.min_index, checking);
  }
  else if (step.action === "swap") {
    viz.setTitle(`Swapping ${step.value1} and ${step.value2}`);
    // Before the swap, color all elements base...
    viz.setRectColours((_, i) => i === i, base);
    // ...mark the swap candidates (index1 and index2) with 'checking'
    viz.setRectColours((_, i) => i === step.index1 || i === step.index2, checking);
    // Optionally, mark elements after index2 as highlight
    viz.setRectColours((_, i) => i > step.index2, highlight);
    // Also, mark the already-sorted portion using 'found'
    viz.setRectColours((_, i) => i > (step.array_before_swap.length - 1) - step.iteration, found);
    viz.setArray(step.array_before_swap);
    await viz.swapBoxes(step.index1, step.index2);
  }
  else if (step.action === "swap_complete") {
    viz.setTitle("Swap complete");
    viz.setRectColours((_, i) => i === i, base);
    viz.setArray(step.array_after_swap);
  }
  else if (step.action === "sorted") {
    viz.setTitle("Sorting Complete");
    viz.setArray(step.sorted_array);
    viz.setRectColours((_, i) => i === i, found);
    viz.clearQueue();
  }
};
