import VisualizeAlgorithm from "./Visualizers/VisualizeAlgorithm";
import { binarySearchConfig } from "./Visualizers/Algorithms/BinarySearch/BinarySearchConfig";
import { linearSearchConfig } from "./Visualizers/Algorithms/LinearSearch/LinearSearchConfig";
const App = () => {
  
  return (
    <div>
      <VisualizeAlgorithm config={binarySearchConfig} />
    </div>
  );
};

export default App;
