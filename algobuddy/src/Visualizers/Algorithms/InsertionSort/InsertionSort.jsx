import { colours } from "../../../Theme/Colours";

export const applyInsertionSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking } = colours;
  
  if (step.action === "start_sort") {
    // Initial state: unsorted array
    viz.setTitle("Insertion Sort");
    viz.setRectColours((_, i) => true, base);
    viz.setArray(step.array);
    viz.clearQueue();
  }
  else if (step.action === "select_key") {
    // Key selection step: mark the sorted portion (before key index) as found,
    // and highlight the key.
    viz.setTitle(`Select key ${step.key} at index ${step.index}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    viz.setRectColours((_, i) => i < step.index, found);
    viz.setRectColours((_, i) => i === step.index, highlight);
  }
  else if (step.action === "compare") {
    // Comparison step: compare the key with an element at a lower index.
    viz.setTitle(`Comparing key ${step.key} (index ${step.key_index}) with element ${step.compare_value} (index ${step.compare_index})`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    // Mark the sorted portion (all indices before the key) as found.
    viz.setRectColours((_, i) => i < step.key_index, found);
    // Highlight the key element.
    viz.setRectColours((_, i) => i === step.key_index, highlight);
    // Mark the element being compared as checking.
    viz.setRectColours((_, i) => i === step.compare_index, checking);
  }
  else if (step.action === "shift") {
    // Shift step: the element at from_index is shifted to to_index.
    viz.setTitle(`Shifting element ${step.shifted_value} from index ${step.from_index} to ${step.to_index}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    // Mark all indices before from_index (already sorted) as found.
    viz.setRectColours((_, i) => i < step.from_index, found);
    // Highlight the destination position.
    viz.setRectColours((_, i) => i === step.to_index, checking);
  }
  else if (step.action === "insert") {
    // Insertion step: key is inserted into its correct position.
    viz.setTitle(`Inserting key ${step.inserted_key} at index ${step.insert_index}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    // Mark elements before the inserted key as sorted.
    viz.setRectColours((_, i) => i < step.insert_index, found);
    // Highlight the inserted key.
    viz.setRectColours((_, i) => i === step.insert_index, highlight);
  }
  else if (step.action === "sorted") {
    // Final sorted array.
    viz.setTitle("Insertion Sort Complete");
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, found);
    viz.clearQueue();
  }
};
