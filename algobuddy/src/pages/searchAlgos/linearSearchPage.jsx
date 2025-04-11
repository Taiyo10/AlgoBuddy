import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";
import { linearSearchConfig } from "@/Visualizers/Algorithms/LinearSearch/LinearSearchConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const LinearSearchPage = () => {
  return (
    <div className="overflow-y-scroll h-[90vh]">
      <div id="top-container" className="h-[22vh] flex justify-between">
        <div id="title-container-outer" className="w-[60vw] flex items-center">
          <div
            id="title-container-inner"
            className="h-[20.6vh] w-[57vw] ml-auto flex flex-col"
          >
            <div id="title" className="h-[12vh] py-4">
              <img
                id="title-1"
                src="./linear-title.png"
                alt=""
                className="h-[4.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./linear-title-dark-mode.png"
                alt=""
                className="h-[4.5vh] hidden dark:block"
              />
              <img
                id="title-2"
                src="./search-title.png"
                alt=""
                className="h-[4.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./search-title-dark-mode.png"
                alt=""
                className="h-[4.5vh] hidden dark:block"
              />
            </div>
            <div id="preamble">
              <h1 id="preamble-text" className="text-[0.8vw] font-dmsans">
                In computer science, linear search or sequential search is a
                method for finding an element within a list. It sequentially
                checks each element of the list until a match is found or the
                whole list has been searched. A linear search runs in linear
                time in the worst case, and makes at most n comparisons, where n
                is the length of the list. If each element is equally likely to
                be searched, then linear search has an average case of (n+1) / 2
                comparisons, but the average case can be affected if the search
                probabilities for each element vary.
              </h1>
            </div>
          </div>
        </div>
        <div
          id="top-shape"
          className="w-[40vw] border-l-[10vw] border-l-transparent border-b-[22.2vh] border-b-[#2A5829]"
        >
          <div
            id="icon-container"
            className="w-[25vw] h-[20.5vh] bg-none flex justify-center items-center"
          >
            <img src="./linear-search-icon.png" alt="" className="w-[10vw]" />
          </div>
        </div>
      </div>
      <VisualizeAlgorithm config={linearSearchConfig} />
      <div className="flex justify-center my-4">
        <SampleCode
        Java={javaCode}
        Python={pythonCode}
        JS={jsCode}
        CPlusPlus={cppCode}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LinearSearchPage;

// Code snippets
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
