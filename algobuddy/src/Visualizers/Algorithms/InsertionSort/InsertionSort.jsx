import { colours } from "../../../Theme/Colours";

export const applyInsertionSortStep = async (viz, step, args) => {
  const { base, highlight, found, checking } = colours;
  const { log } = args;

  if (step.action === "start_sort") {
    log("Starting Insertion Sort");
    viz.setTitle("Insertion Sort");
    viz.setRectColours((_, i) => true, base);
    viz.setArray(step.array);
    viz.clearQueue();

  } else if (step.action === "select_key") {
    log(`Selecting key ${step.key} at index ${step.index}`);
    viz.setTitle(`Select key ${step.key} at index ${step.index}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    viz.setRectColours((_, i) => i < step.index, found);
    viz.setRectColours((_, i) => i === step.index, highlight);

  } else if (step.action === "compare") {
    log(`Comparing key ${step.key} (index ${step.key_index}) with ${step.compare_value} (index ${step.compare_index})`);
    viz.setTitle(`Comparing key ${step.key} (index ${step.key_index}) with element ${step.compare_value} (index ${step.compare_index})`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    viz.setRectColours((_, i) => i < step.key_index, found);
    viz.setRectColours((_, i) => i === step.key_index, highlight);
    viz.setRectColours((_, i) => i === step.compare_index, checking);

  } else if (step.action === "shift") {
    log(`Shifting ${step.shifted_value} from index ${step.from_index} to ${step.to_index}`);
    viz.setTitle(`Shifting element ${step.shifted_value} from index ${step.from_index} to ${step.to_index}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    viz.setRectColours((_, i) => i < step.from_index, found);
    viz.setRectColours((_, i) => i === step.to_index, checking);

  } else if (step.action === "insert") {
    log(`Inserting key ${step.inserted_key} at index ${step.insert_index}`);
    viz.setTitle(`Inserting key ${step.inserted_key} at index ${step.insert_index}`);
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, base);
    viz.setRectColours((_, i) => i < step.insert_index, found);
    viz.setRectColours((_, i) => i === step.insert_index, highlight);

  } else if (step.action === "sorted") {
    log("Insertion Sort Complete");
    viz.setTitle("Insertion Sort Complete");
    viz.setArray(step.array);
    viz.setRectColours((_, i) => true, found);
    viz.clearQueue();
  }
};
