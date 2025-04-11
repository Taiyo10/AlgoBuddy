import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";
import { insertionSortConfig } from "@/Visualizers/Algorithms/InsertionSort/InsertionSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const InsertionSortPage = () => {
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
                src="./insertion-title.png"
                alt=""
                className="h-[4.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./insertion-title-dark-mode.png"
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
                Insertion sort is a simple sorting algorithm that builds the
                final sorted array (or list) one item at a time by comparisons.
                It is much less efficient on large lists than more advanced
                algorithms such as quicksort, heapsort, or merge sort. Insertion
                sort iterates, consuming one input element each repetition, and
                grows a sorted output list. At each iteration, insertion sort
                removes one element from the input data, finds the location it
                belongs within the sorted list, and inserts it there. It repeats
                until no input elements remain.
              </h1>
            </div>
          </div>
        </div>
        <div
          id="top-shape"
          className="w-[40vw] border-l-[10vw] border-l-transparent border-b-[22vh] border-b-[#2A5829]"
        >
          <div
            id="icon-container"
            className="w-[25vw] h-[20.5vh] bg-none flex justify-center items-center"
          >
            <img src="./insertion-sort-icon.png" alt="" className="w-[10vw]" />
          </div>
        </div>
      </div>
      <VisualizeAlgorithm config={insertionSortConfig} />
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

export default InsertionSortPage;

// Code snippets
const javaCode = `// Insertion Sort in Java

  class InsertionSort {
    public static void insertionSort(int array[]) {
      int n = array.length;
  
      for (int i = 1; i < n; ++i) {
        int key = array[i];
        int j = i - 1;
  
        // Move elements of array[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          j = j - 1;
        }
        array[j + 1] = key;
      }
    }
  }
  `;

const pythonCode = `# Insertion Sort in Python
  
  def insertionSort(array):
      n = len(array)
  
      for i in range(1, n):
          key = array[i]
          j = i - 1
  
          # Move elements of array[0..i-1], greater than key, to one position ahead
          while j >= 0 and array[j] > key:
              array[j + 1] = array[j]
              j -= 1
          array[j + 1] = key
  `;

const jsCode = `// Insertion Sort in JavaScript
  
  function insertionSort(array) {
    const n = array.length;
  
    for (let i = 1; i < n; i++) {
      const key = array[i];
      let j = i - 1;
  
      // Move elements of array[0..i-1] that are greater than key
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = key;
    }
  }
  `;

const cppCode = `// Insertion Sort in C++
  
  #include <iostream>
  using namespace std;
  
  void insertionSort(int array[], int n) {
    for (int i = 1; i < n; i++) {
      int key = array[i];
      int j = i - 1;
  
      // Move elements of array[0..i-1], greater than key, to one position ahead
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = key;
    }
  }
  `;
