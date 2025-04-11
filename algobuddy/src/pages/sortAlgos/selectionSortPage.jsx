import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";
import { selectionSortConfig } from "@/Visualizers/Algorithms/SelectionSort/SelectionSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const SelectionSortPage = () => {
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
                src="./selection-title.png"
                alt=""
                className="h-[4.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./selection-title-dark-mode.png"
                alt=""
                className="h-[4.5vh] hidden dark:block"
              />
              <img
                id="title-2"
                src="./sort-title.png"
                alt=""
                className="h-[4.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./sort-title-dark-mode.png"
                alt=""
                className="h-[4.5vh] hidden dark:block"
              />
            </div>
            <div id="preamble">
              <h1 id="preamble-text" className="text-[0.8vw] font-dmsans">
                In computer science, selection sort is an in-place comparison
                sorting algorithm. It has a O(n2) time complexity, which makes
                it inefficient on large lists, and generally performs worse than
                the similar insertion sort. Selection sort is noted for its
                simplicity and has performance advantages over more complicated
                algorithms in certain situations, particularly where auxiliary
                memory is limited.
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
            <img src="./selection-sort-icon.png" alt="" className="w-[10vw]" />
          </div>
        </div>
      </div>
      <VisualizeAlgorithm config={selectionSortConfig} />
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

export default SelectionSortPage;

// Code snippets
const javaCode = `// Selection Sort in Java

  class SelectionSort {
    public static void selectionSort(int array[]) {
      int n = array.length;
  
      for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
  
        // Find the minimum element in unsorted array
        for (int j = i + 1; j < n; j++) {
          if (array[j] < array[minIndex]) {
            minIndex = j;
          }
        }
  
        // Swap the found minimum element with the first element
        int temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
      }
    }
  }
  `;

const pythonCode = `# Selection Sort in Python
  
  def selectionSort(array):
      n = len(array)
  
      for i in range(n):
          min_index = i
  
          # Find the minimum element in remaining unsorted array
          for j in range(i + 1, n):
              if array[j] < array[min_index]:
                  min_index = j
  
          # Swap the found minimum element with the first element
          array[i], array[min_index] = array[min_index], array[i]
  `;

const jsCode = `// Selection Sort in JavaScript
  
  function selectionSort(array) {
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      // Find the minimum element in unsorted array
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  `;

const cppCode = `// Selection Sort in C++
  
  #include <iostream>
  using namespace std;
  
  void selectionSort(int array[], int n) {
    for (int i = 0; i < n - 1; i++) {
      int minIndex = i;
  
      // Find the minimum element in unsorted array
      for (int j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element
      swap(array[i], array[minIndex]);
    }
  }
  `;
