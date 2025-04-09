import VisualizeAlgorithm from "./Visualizers/VisualizeAlgorithm";
import { binarySearchConfig } from "./Visualizers/Algorithms/BinarySearch/BinarySearchConfig";
import { linearSearchConfig } from "./Visualizers/Algorithms/LinearSearch/LinearSearchConfig";
import { bubbleSortConfig } from "./Visualizers/Algorithms/BubbleSort/BubbleSortConfig";
import { heapSortConfig } from "./Visualizers/Algorithms/HeapSort/HeapSortConfig";
const App = () => {
  
  return (
    <div>
      <VisualizeAlgorithm config={bubbleSortConfig} />
    </div>
  );
};

export default App;
