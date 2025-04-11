import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";

const HeapSortPage = () => {
    return <div>
    HeapSortPage
    <SampleCode
      Java={javaCode}
      Python={pythonCode}
      JS={jsCode}
      CPlusPlus={cppCode}
      />
    </div>;
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