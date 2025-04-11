import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";

const QuickSortPage = () => {
    return <div>
      QuickSortPage
      <SampleCode
      Java={javaCode}
      Python={pythonCode}
      JS={jsCode}
      CPlusPlus={cppCode}
      />
    </div>;
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