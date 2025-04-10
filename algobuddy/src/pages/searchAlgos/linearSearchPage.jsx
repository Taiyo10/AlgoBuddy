import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";
import { linearSearchConfig } from "@/Visualizers/Algorithms/LinearSearch/LinearSearchConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";



// Code snippets (organized)
const javaCode = `// Linear Search in Java

class LinearSearch {
  public static int linearSearch(int array[], int x) {
  int n = array.length;

  // Going through array sequencially
  for (int i = 0; i < n; i++) {
    if (array[i] == x)
    return i;
  }
  return -1;
  }`;
const pythonCode = `# Linear Search in Python

def linearSearch(array, n, x):

    # Going through array sequencially
    for i in range(0, n):
        if (array[i] == x):
            return i
    return -1
`;
const jsCode = `// Linear Search in JavaScript

function linearSearch(array, x) {
  const n = array.length;

  // Going through array sequentially
  for (let i = 0; i < n; i++) {
    if (array[i] === x) {
      return i;
    }
  }
  return -1;
}`;
const cppCode = `// Linear Search in C++

#include <iostream>
using namespace std;

int search(int array[], int n, int x) {

  // Going through array sequencially
  for (int i = 0; i < n; i++)
    if (array[i] == x)
      return i;
  return -1;
}`;

const LinearSearchPage = () => {
    return <div className="flex-wrap h-auto justify-items-center justify-center overflow-y-auto">
      <VisualizeAlgorithm config={linearSearchConfig} />
      LinearSearchPage
      <SampleCode
      Java={javaCode}
      Python={pythonCode}
      JS={jsCode}
      CPlusPlus={cppCode}
      />
      </div>;
  };
  
  export default LinearSearchPage;