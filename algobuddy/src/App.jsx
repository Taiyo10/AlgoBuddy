import VisualizeAlgorithm from "./Visualizers/VisualizeAlgorithm";
import { binarySearchConfig } from "./Visualizers/Algorithms/BinarySearch/BinarySearchConfig";
import { linearSearchConfig } from "./Visualizers/Algorithms/LinearSearch/LinearSearchConfig";
import { bubbleSortConfig } from "./Visualizers/Algorithms/BubbleSort/BubbleSortConfig";
import { mergeSortConfig } from "./Visualizers/Algorithms/MergeSort/MergeSortConfig";
import { selectionSortConfig } from "./Visualizers/Algorithms/SelectionSort/SelectionSortConfig";
import { quickSortConfig } from "./Visualizers/Algorithms/QuickSort/QuickSortConfig";
import { insertionSortConfig } from "./Visualizers/Algorithms/InsertionSort/InsertionSortConfig";
import { heapSortConfig } from "./Visualizers/Algorithms/HeapSort/HeapSortConfig";
import { useRef } from "react";
import { Outputs } from "./Visualizers/components/Outputs";
import { useLogger } from "./Visualizers/hooks/useLogger";
const App = () => {
  return (
    <div>
      <VisualizeAlgorithm config={quickSortConfig} />
    </div>
  );
};

export default App;
