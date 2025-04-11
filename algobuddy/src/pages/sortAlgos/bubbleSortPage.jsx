import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";
import { bubbleSortConfig } from "@/Visualizers/Algorithms/BubbleSort/BubbleSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const BubbleSortPage = () => {
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
                src="./bubble-title.png"
                alt=""
                className="h-[4.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./bubble-title-dark-mode.png"
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
                Bubble sort, sometimes referred to as sinking sort, is a simple
                sorting algorithm that repeatedly steps through the input list
                element by element, comparing the current element with the one
                after it, swapping their values if needed. These passes through
                the list are repeated until no swaps have to be performed during
                a pass, meaning that the list has become fully sorted. The
                algorithm, which is a comparison sort, is named for the way the
                larger elements "bubble" up to the top of the list. This simple
                algorithm performs poorly in real-world use and is used
                primarily as an educational tool.
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
            <img src="./bubble-sort-icon.png" alt="" className="w-[10vw]" />
          </div>
        </div>
      </div>
      <VisualizeAlgorithm config={bubbleSortConfig} />
      <SampleCode
        Java={javaCode}
        Python={pythonCode}
        JS={jsCode}
        CPlusPlus={cppCode}
      />
      <Footer></Footer>
    </div>
  );
};

export default BubbleSortPage;

// Code snippets
const javaCode = `// Bubble Sort in Java

  class BubbleSort {
    public static void bubbleSort(int array[]) {
      int n = array.length;
      boolean swapped;
  
      // Traverse through all array elements
      for (int i = 0; i < n - 1; i++) {
        swapped = false;
        
        // Last i elements are already in place
        for (int j = 0; j < n - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            // Swap array[j] and array[j+1]
            int temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            swapped = true;
          }
        }
  
        // If no two elements were swapped, array is sorted
        if (!swapped)
          break;
      }
    }
  }
  `;

const pythonCode = `# Bubble Sort in Python
  
  def bubbleSort(array):
      n = len(array)
  
      # Traverse through all array elements
      for i in range(n):
          swapped = False
  
          # Last i elements are already sorted
          for j in range(0, n - i - 1):
              if array[j] > array[j + 1]:
                  # Swap if the element found is greater
                  array[j], array[j + 1] = array[j + 1], array[j]
                  swapped = True
  
          # If no two elements were swapped, array is sorted
          if not swapped:
              break
  `;

const jsCode = `// Bubble Sort in JavaScript
  
  function bubbleSort(array) {
    const n = array.length;
  
    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
  
      // Last i elements are already sorted
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap array[j] and array[j+1]
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          swapped = true;
        }
      }
  
      // If no two elements were swapped, array is sorted
      if (!swapped) {
        break;
      }
    }
  }
  `;

const cppCode = `// Bubble Sort in C++
  
  #include <iostream>
  using namespace std;
  
  void bubbleSort(int array[], int size) {
    // Traverse through all array elements
    for (int i = 0; i < size - 1; i++) {
      bool swapped = false;
  
      // Last i elements are already sorted
      for (int j = 0; j < size - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap array[j] and array[j+1]
          int temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          swapped = true;
        }
      }
  
      // If no two elements were swapped, array is sorted
      if (!swapped)
        break;
    }
  }
  `;
