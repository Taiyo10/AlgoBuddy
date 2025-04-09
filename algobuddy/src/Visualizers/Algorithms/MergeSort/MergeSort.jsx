import { colours } from "../../../Theme/Colours";

export const applyMergeSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking } = colours;
  // 'data' from args is available if needed

  if (step.action === "merge_sort_call") {
    viz.setTitle("Merge Sort");
    viz.setRectColours((_, i) => i === i, base);
    viz.setArray(step.array);
    viz.clearQueue();
  }
  else if (step.action === "split") {
    viz.setTitle(`Splitting: left [${step.left.join(", ")}] and right [${step.right.join(", ")}]`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => i === i, base);
    viz.setRectColours((_, i) => i < step.left.length, highlight);
    viz.setRectColours((_, i) => i >= step.left.length, checking);
  }
  else if (step.action === "compare") {
    // We assume the log includes indices for the compared elements
    viz.setRectColours((_, i) => i < step.left_index, base);
    viz.setRectColours((_, i) => i === step.left_index || i === step.right_index, checking);
    viz.setRectColours((_, i) => i > step.right_index, highlight);
    viz.setTitle(`Comparing ${step.left_value} and ${step.right_value}`);
    viz.setArray(step.array);
  }
  else if (step.action === "merge_step") {
    viz.setRectColours((_, i) => i === i, base);
    viz.setRectColours((_, i) => i < step.merged_so_far.length, found);
    viz.setTitle(`Merging: [${step.merged_so_far.join(", ")}]`);
    viz.setArray(step.array);
  }
  else if (step.action === "merge_complete") {
    viz.setRectColours((_, i) => i === i, found);
    viz.setTitle("Merge Complete");
    viz.setArray(step.merged_result);
    viz.clearQueue();
  }
  else if (step.action === "base_case") {
    viz.setRectColours((_, i) => i === i, found);
    viz.setTitle(`Base case: [${step.subarray.join(", ")}]`);
    viz.setArray(step.array);
  }
};
