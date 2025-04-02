import React, { useState } from "react";
import ArrayVisualizer from "./Visualizers/ArrayViz";
import BinarySearchViz from "./Visualizers/BinarySearch";

const App = () => {
  const array = [1, 3, 5, 7, 9, 11];
  const search = 7
 
  return (
    <div>
      <BinarySearchViz data={array} target={search}/>
    </div>
  );
};

export default App;
