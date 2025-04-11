import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";
import { heapSortConfig } from "@/Visualizers/Algorithms/HeapSort/HeapSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const HeapSortPage = () => {
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
                src="./heap-title.png"
                alt=""
                className="h-[4.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./heap-title-dark-mode.png"
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
                In computer science, heapsort is an efficient, comparison-based
                sorting algorithm that reorganizes an input array into a heap (a
                data structure where each node is greater than its children) and
                then repeatedly removes the largest node from that heap, placing
                it at the end of the array. Although somewhat slower in practice
                on most machines than a well-implemented quicksort, it has the
                advantages of very simple implementation and a more favorable
                worst-case O(n log n) runtime. Most real-world quicksort
                variants include an implementation of heapsort as a fallback
                should they detect that quicksort is becoming degenerate.
              </h1>
            </div>
          </div>
        </div>
        <div
          id="top-shape"
          className="w-[40vw] border-l-[15vw] border-l-transparent border-b-[22.2vh] border-b-[#2A5829]"
        >
          <div
            id="icon-container"
            className="w-[25vw] h-[20.5vh] bg-none flex justify-center items-center"
          >
            <img src="./heap-sort-icon.png" alt="" className="w-[10vw]" />
          </div>
        </div>
      </div>
      <VisualizeAlgorithm config={heapSortConfig} />
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

export default HeapSortPage;

// Code snippets
const javaCode = `// Heap Sort in Java

class HeapSort {
  public void sort(int array[]) {
    int n = array.length;

    // Build max heap
    for (int i = n / 2 - 1; i >= 0; i--)
      heapify(array, n, i);

    // Extract elements from heap
    for (int i = n - 1; i >= 0; i--) {
      // Move current root to end
      int temp = array[0];
      array[0] = array[i];
      array[i] = temp;

      // Call max heapify on the reduced heap
      heapify(array, i, 0);
    }
  }

  void heapify(int array[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && array[left] > array[largest])
      largest = left;

    if (right < n && array[right] > array[largest])
      largest = right;

    if (largest != i) {
      int swap = array[i];
      array[i] = array[largest];
      array[largest] = swap;

      heapify(array, n, largest);
    }
  }
}
`;

const pythonCode = `# Heap Sort in Python

def heapify(array, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and array[left] > array[largest]:
        largest = left

    if right < n and array[right] > array[largest]:
        largest = right

    if largest != i:
        array[i], array[largest] = array[largest], array[i]
        heapify(array, n, largest)

def heapSort(array):
    n = len(array)

    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(array, n, i)

    # Extract elements from heap
    for i in range(n - 1, 0, -1):
        array[i], array[0] = array[0], array[i]
        heapify(array, i, 0)
`;

const jsCode = `// Heap Sort in JavaScript

function heapify(array, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && array[left] > array[largest])
    largest = left;

  if (right < n && array[right] > array[largest])
    largest = right;

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, n, largest);
  }
}

function heapSort(array) {
  const n = array.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0);
  }
}
`;

const cppCode = `// Heap Sort in C++

#include <iostream>
using namespace std;

void heapify(int array[], int n, int i) {
  int largest = i;
  int left = 2 * i + 1;
  int right = 2 * i + 2;

  if (left < n && array[left] > array[largest])
    largest = left;

  if (right < n && array[right] > array[largest])
    largest = right;

  if (largest != i) {
    swap(array[i], array[largest]);
    heapify(array, n, largest);
  }
}

void heapSort(int array[], int n) {
  // Build max heap
  for (int i = n / 2 - 1; i >= 0; i--)
    heapify(array, n, i);

  // Extract elements from heap
  for (int i = n - 1; i >= 0; i--) {
    swap(array[0], array[i]);
    heapify(array, i, 0);
  }
}
`;
