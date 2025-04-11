import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";
import { quickSortConfig } from "@/Visualizers/Algorithms/QuickSort/QuickSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const QuickSortPage = () => {
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
                src="./quick-title.png"
                alt=""
                className="h-[4.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./quick-title-dark-mode.png"
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
                Quicksort is an efficient, general-purpose sorting algorithm.
                Quicksort was developed by British computer scientist Tony Hoare
                in 1959 and published in 1961. It is still a commonly used
                algorithm for sorting. Overall, it is slightly faster than merge
                sort and heapsort for randomized data, particularly on larger
                distributions. Quicksort is a divide-and-conquer algorithm. It
                works by selecting a 'pivot' element from the array and
                partitioning the other elements into two sub-arrays, according
                to whether they are less than or greater than the pivot.
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
            <img src="./quick-sort-icon.png" alt="" className="w-[10vw]" />
          </div>
        </div>
      </div>
      <VisualizeAlgorithm config={quickSortConfig} />
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

export default QuickSortPage;

// Code snippets
const javaCode = `// Quick Sort in Java

class QuickSort {
  int partition(int array[], int low, int high) {
    int pivot = array[high];
    int i = (low - 1);

    for (int j = low; j < high; j++) {
      if (array[j] <= pivot) {
        i++;
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    int temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    return i + 1;
  }

  void quickSort(int array[], int low, int high) {
    if (low < high) {
      int pi = partition(array, low, high);

      quickSort(array, low, pi - 1);
      quickSort(array, pi + 1, high);
    }
  }
}
`;

const pythonCode = `# Quick Sort in Python

def partition(array, low, high):
    pivot = array[high]
    i = low - 1

    for j in range(low, high):
        if array[j] <= pivot:
            i += 1
            array[i], array[j] = array[j], array[i]

    array[i + 1], array[high] = array[high], array[i + 1]
    return i + 1

def quickSort(array, low, high):
    if low < high:
        pi = partition(array, low, high)

        quickSort(array, low, pi - 1)
        quickSort(array, pi + 1, high)
`;

const jsCode = `// Quick Sort in JavaScript

function partition(array, low, high) {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}

function quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    const pi = partition(array, low, high);

    quickSort(array, low, pi - 1);
    quickSort(array, pi + 1, high);
  }
}
`;

const cppCode = `// Quick Sort in C++

#include <iostream>
using namespace std;

int partition(int array[], int low, int high) {
  int pivot = array[high];
  int i = (low - 1);

  for (int j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(array[i], array[j]);
    }
  }

  swap(array[i + 1], array[high]);
  return i + 1;
}

void quickSort(int array[], int low, int high) {
  if (low < high) {
    int pi = partition(array, low, high);

    quickSort(array, low, pi - 1);
    quickSort(array, pi + 1, high);
  }
}
`;
