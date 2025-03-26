import React, { useState } from "react";
import ArrayVisualizer from "./Visualizers/ArrayViz";

const App = () => {
  const array = [3, 5, 1, 7, 2, 8, 4];
 
  return (
    <div>
      <ArrayVisualizer data={array} />
    </div>
  );
};

export default App;
