import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";

const InsertionSortPage = () => {
    return <div>
      InsertionSortPage
      <SampleCode
      Java={javaCode}
      Python={pythonCode}
      JS={jsCode}
      CPlusPlus={cppCode}
      />
    </div>;
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
