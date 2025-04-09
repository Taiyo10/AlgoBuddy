import { colours } from "../../../Theme/Colours";

export const applyQuickSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking, pivot } = colours;

  // Layering of colours: first reset all boxes to the base,
  // then override specific indices with designated colours.

  if (step.action === "quick_sort_call") {
    viz.setTitle(`Quick Sort on [${step.subarray.join(", ")}]`);
    viz.setRectColours((_, i) => true, base);
    viz.setArray(step.array);
    viz.clearQueue();
  }
  else if (step.action === "pivot_chosen") {
    viz.setTitle(`Pivot chosen: ${step.pivot_value} (index ${step.pivot_index})`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    viz.setRectColours((_, i) => i === step.pivot_index, pivot);
  }
  else if (step.action === "compare") {
    viz.setTitle(
      `Comparing element at index ${step.current_index} (value ${step.current_value}) with pivot (value ${step.pivot_value})`
    );
    viz.setArray(step.array);
    // Reset to base...
    viz.setRectColours((_, i) => true, base);
    // Mark the pivot...
    viz.setRectColours((_, i) => i === step.pivot_index, pivot);
    // ...and then mark the current element as being checked.
    viz.setRectColours((_, i) => i === step.current_index, checking);
  }
  else if (step.action === "swap") {
    viz.setTitle(`Swapping ${step.values[0]} and ${step.values[1]}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    const [i, j] = step.indices;
    // Optionally ensure that if the pivot is one of these, mark it.
    viz.setRectColours((_, i) => i === step.pivot_index, pivot);
    // Mark the swap candidate positions with the checking color.
    viz.setRectColours((_, idx) => (idx === i || idx === j), checking);
    viz.enqueue(() => viz.swapBoxes(i, j));
  }
  else if (step.action === "no_swap") {
    viz.setTitle(`No swap for index ${step.current_index} (value ${step.current_value}), not less than pivot`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    viz.setRectColours((_, i) => i === step.pivot_index, pivot);
  }
  else if (step.action === "partition_complete") {
    viz.setTitle(`Partition complete. Pivot at index ${step.pivot_index}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    // Mark the pivot at its final position as found.
    viz.setRectColours((_, i) => i === step.pivot_index, found);
    viz.clearQueue();
  }
  else if (step.action === "number_sorted") {
    // This event logs an individual element that is now completely sorted.
    viz.setTitle(`Number sorted: ${step.value} (index ${step.index})`);
    viz.setArray(step.array);
    // Mark only that index as found.
    viz.setRectColours((_, i) => i === step.index, found);
  }
  else if (step.action === "quick_sort_no_action") {
    viz.setTitle(`No action needed for subarray [${step.subarray.join(", ")}]`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
  }
  else if (step.action === "quick_sort_end") {
    viz.setTitle(`Quick Sort complete on [${step.array.join(", ")}]`);
    viz.setArray(step.array);
    // Mark the entire array as sorted.
    viz.setRectColours((_, i) => true, found);
    viz.clearQueue();
  }
};
