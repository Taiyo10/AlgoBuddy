import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";


const SelectionSortPage = () => {
    return <div>
      SelectionSortPage
      <SampleCode
      Java={javaCode}
      Python={pythonCode}
      JS={jsCode}
      CPlusPlus={cppCode}/>
      </div>;
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
