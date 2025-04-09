import { colours } from "../../../Theme/Colours";

export const applyMergeSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking } = colours;

  if (step.action === "merge_sort_call") {
    viz.setTitle(`Merge Sort Call: [${step.subarray.join(", ")}]`);
    viz.setArray(step.array);
    viz.setRectColours(() => base);
  }

  else if (step.action === "split") {
    viz.setTitle(`Splitting into [${step.left.join(", ")}] and [${step.right.join(", ")}]`);
    viz.setArray(step.array);
    const mid = step.left.length;
    viz.setRectColours((_, i) => (i < mid ? highlight : checking));
  }

  else if (step.action === "compare") {
    viz.setTitle(`Comparing ${step.left_value} and ${step.right_value}`);
    viz.setArray(step.array);
    viz.setRectColours((val, i) => {
      if (val === step.left_value) return highlight;
      if (val === step.right_value) return checking;
      return base;
    });
  }

  else if (step.action === "merge_step") {
    viz.setTitle(`Merging: [${step.merged_so_far.join(", ")}]`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) =>
      i < step.merged_so_far.length ? found : base
    );
  }

  else if (step.action === "merge_complete") {
    viz.setTitle("Merge Complete");
    viz.setArray(step.merged_result);
    viz.setRectColours(() => found);
  }

  else if (step.action === "base_case") {
    viz.setTitle(`Base Case: [${step.subarray.join(", ")}]`);
    viz.setArray(step.array);
    viz.setRectColours(() => found);
  }
};
