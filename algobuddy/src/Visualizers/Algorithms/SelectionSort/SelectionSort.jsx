import { colours } from "../../../Theme/Colours";

export const applySelectionSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking } = colours;
  const { data, log } = args;

  // We'll define a helper to color everything base,
  // then apply "checking" or "highlight" as needed,
  // and finally set found on indices < step.iteration (if iteration is defined).
  const applyColorsWithFoundLast = (callback) => {
    // 1) Base all
    viz.setRectColours((_, i) => true, base);
    // 2) Let the step-specific logic set "checking", "highlight", etc.
    callback();
    // 3) Finally, if we have an iteration value, color all sorted indices as found.
    if (typeof step.iteration === "number") {
      viz.setRectColours((_, i) => i < step.iteration, found);
    }
  };

  if (step.action === "start_sort") {
    viz.setTitle("Selection Sort");
    log("Starting Selection Sort");
    console.l
    viz.setRectColours((_, i) => true, base);
    viz.setArray(step.array);
    viz.clearQueue();
    viz.setRectColours((_, i) => i < step.iteration, found);
  }
  else if (step.action === "iteration_start") {
    viz.setTitle(`Iteration ${step.iteration}`);
    log(`Iteration ${step.iteration}`);
    viz.setRectColours((_, i) => true, base);
    // Mark all indices before this iteration as found
    if (typeof step.iteration === "number") {
      viz.setRectColours((_, i) => i < step.iteration, found);
    }
    viz.setArray(step.array);
  }
  else if (step.action === "select_initial_min") {
    viz.setTitle(`Initial min: index ${step.index} (${step.value})`);
    log(`Initial min: index ${step.index} (${step.value})`);
    applyColorsWithFoundLast(() => {
      // highlight the initial min as checking
      viz.setRectColours((_, i) => i === step.index, checking);
    });
    viz.setRectColours((_, i) => i < step.iteration, found);
  }
  else if (step.action === "compare") {
    viz.setTitle(`Comparing ${step.value1} (index ${step.index1}) with ${step.value2} (index ${step.index2})`);
    log(`Comparing ${step.value1} (index ${step.index1}) with ${step.value2} (index ${step.index2})`);
    applyColorsWithFoundLast(() => {
      // Mark the two elements being compared as checking
      viz.setRectColours((_, i) => i === step.index1 || i === step.index2, checking);
      // Optionally, mark elements after index2 as highlight
      viz.setRectColours((_, i) => i > step.index2, highlight);
    });
    viz.setArray(step.array);
    viz.setRectColours((_, i) => i < step.iteration, found);
  }
  else if (step.action === "new_min_found") {
    viz.setTitle(`New min found at index ${step.min_index} (${step.min_value})`);
    log(`New min found at index ${step.min_index} (${step.min_value})`);
    applyColorsWithFoundLast(() => {
      viz.setRectColours((_, i) => i === step.min_index, checking);
    });
    viz.setRectColours((_, i) => i < step.iteration, found);
  }
  else if (step.action === "swap") {
    viz.setTitle(`Swapping ${step.value1} and ${step.value2}`);
    log(`Swapping ${step.value1} and ${step.value2}`);
    // Show the array state before swap
    viz.setArray(step.array_before_swap);


    applyColorsWithFoundLast(() => {
      viz.setRectColours((_, i) => i === step.index1 || i === step.index2, checking);
      // Mark elements after index2 as highlight if desired
      viz.setRectColours((_, i) => i > step.index2, highlight);
    });
    viz.setRectColours((_, i) => i < step.iteration, found);
    await viz.swapBoxes(step.index1, step.index2);
  }
  else if (step.action === "swap_complete") {
    viz.setTitle("Swap complete");
    log("Swap complete");
    viz.setArray(step.array_after_swap);
    viz.setRectColours((_, i) => i < step.iteration, found);
    applyColorsWithFoundLast(() => {
      // No special checking or highlight needed immediately after the swap
    });
  }
  else if (step.action === "sorted") {
    viz.setTitle("Sorting Complete");
    log("Sorting Complete");
    viz.setArray(step.sorted_array);
    // Everything is found color at the end
    viz.setRectColours((_, i) => true, found);
    viz.clearQueue();
  }
};
