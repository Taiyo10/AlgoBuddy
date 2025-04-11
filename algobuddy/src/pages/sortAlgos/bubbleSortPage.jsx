import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";


const BubbleSortPage = () => {
    return <div>
      BubbleSortPage
      <SampleCode
        Java={javaCode}
        Python={pythonCode}
        JS={jsCode}
        CPlusPlus={cppCode}
        />
      </div>;
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