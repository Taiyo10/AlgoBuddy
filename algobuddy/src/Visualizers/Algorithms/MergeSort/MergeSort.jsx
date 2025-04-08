import { colours } from "../../../Theme/Colours";

export const applySelectionSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking } = colours;
  const { data } = args;

  if (step.action === "start_sort") {
    viz.setTitle("Selection Sort");
    viz.setArray(step.array);
    viz.setRectColours(() => base);
  }

  else if (step.action === "iteration_start") {
    viz.setTitle(`Iteration ${step.iteration}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => i < step.iteration ? found : base);
  }

  else if (step.action === "select_initial_min") {
    viz.setTitle(`Initial min: index ${step.index} (${step.value})`);
    viz.setRectColours((_, i) => i === step.index ? highlight : base);
  }

  else if (step.action === "compare") {
    viz.setTitle(`Comparing ${step.value1} (index ${step.index1}) with ${step.value2} (index ${step.index2})`);
    viz.setRectColours((_, i) =>
      i === step.index1 ? highlight :
      i === step.index2 ? checking :
      base
    );
  }

  else if (step.action === "new_min_found") {
    viz.setTitle(`New min found at index ${step.min_index} (${step.min_value})`);
    viz.setRectColours((_, i) => i === step.min_index ? highlight : base);
  }

  else if (step.action === "swap") {
    viz.setTitle(`Swapping ${step.value1} and ${step.value2}`);
    viz.setArray(step.array_before_swap);
    viz.setRectColours((_, i) =>
      i === step.index1 || i === step.index2 ? checking : base
    );
    await viz.swapBoxes(step.index1, step.index2);
  }

  else if (step.action === "swap_complete") {
    viz.setTitle(`Swap complete`);
    viz.setArray(step.array_after_swap);
    viz.setRectColours((_, i) => i === step.index1 || i === step.index2 ? found : base);
  }

  else if (step.action === "sorted") {
    viz.setTitle("Sorting Complete");
    viz.setArray(step.sorted_array);
    viz.setRectColours(() => found);
  }
};
