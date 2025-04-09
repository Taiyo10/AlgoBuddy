import VisualizeAlgorithm from "./Visualizers/VisualizeAlgorithm";
import { binarySearchConfig } from "./Visualizers/Algorithms/BinarySearch/BinarySearchConfig";
import { linearSearchConfig } from "./Visualizers/Algorithms/LinearSearch/LinearSearchConfig";
import { bubbleSortConfig } from "./Visualizers/Algorithms/BubbleSort/BubbleSortConfig";
import { mergeSortConfig } from "./Visualizers/Algorithms/MergeSort/MergeSortConfig";
import { selectionSortConfig } from "./Visualizers/Algorithms/SelectionSort/SelectionSortConfig";
import { quickSortConfig } from "./Visualizers/Algorithms/QuickSort/QuickSortConfig";

const App = () => {
  
  return (
    <div>
      <VisualizeAlgorithm config={bubbleSortConfig} />
    </div>
  );
};

export default App;
