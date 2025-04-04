import VisualizeAlgorithm from "./Visualizers/VisualizeAlgorithm";
import { binarySearchConfig } from "./Visualizers/Algorithms/BinarySearch/BinarySearchConfig";
const App = () => {
  
  return (
    <div>
      <VisualizeAlgorithm config={binarySearchConfig} />
    </div>
  );
};

export default App;
