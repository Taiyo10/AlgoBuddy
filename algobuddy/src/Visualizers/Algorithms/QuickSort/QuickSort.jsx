import { colours } from "../../../Theme/Colours";

export const applyQuickSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking } = colours;

  if (step.action === "quick_sort_call") {
    viz.setTitle(`Quick Sort on [${step.subarray.join(", ")}]`);
    viz.setRectColours((_, i) => base);
    viz.setArray(step.array);
    viz.clearQueue();
  }

  else if (step.action === "pivot_chosen") {
    viz.setTitle(`Pivot chosen: ${step.pivot_value} (index ${step.pivot_index})`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) =>
      i === step.pivot_index ? highlight : base
    );
  }

  else if (step.action === "compare") {
    viz.setTitle(`Comparing ${step.current_value} with pivot ${step.pivot_value}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => {
      if (i === step.current_index) return checking;
      if (i === step.pivot_index) return highlight;
      return base;
    });
  }

  else if (step.action === "swap") {
    viz.setTitle(`Swapping ${step.values[0]} and ${step.values[1]}`);
    viz.setArray(step.array);
    const [i, j] = step.indices;
    viz.setRectColours((_, idx) =>
      idx === i || idx === j ? checking : base
    );
    viz.enqueue(() => viz.swapBoxes(i, j));
  }

  else if (step.action === "no_swap") {
    viz.setTitle(`No swap for ${step.current_value}, not less than pivot`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => {
      if (i === step.current_index) return checking;
      if (i === step.pivot_index) return highlight;
      return base;
    });
  }

  else if (step.action === "partition_complete") {
    viz.setTitle(`Partition complete at index ${step.pivot_index}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) =>
      i === step.pivot_index ? found : base
    );
    viz.clearQueue();
  }

  else if (step.action === "quick_sort_no_action") {
    viz.setTitle(`No action needed for subarray [${step.subarray.join(", ")}]`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => base);
  }
};
