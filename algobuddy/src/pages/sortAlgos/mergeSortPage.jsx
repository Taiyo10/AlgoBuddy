import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";

const MergeSortPage = () => {
    return <div>
      MergeSortPage
      <SampleCode
      Java={javaCode}
      Python={pythonCode}
      JS={jsCode}
      CPlusPlus={cppCode}/>
    </div>;
  };
  
  export default MergeSortPage;



  // Code snippets
const javaCode = `// Merge Sort in Java

class MergeSort {
  // Merges two subarrays of array[]
  void merge(int array[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temp arrays
    int L[] = new int[n1];
    int R[] = new int[n2];

    // Copy data to temp arrays
    for (int i = 0; i < n1; ++i)
      L[i] = array[left + i];
    for (int j = 0; j < n2; ++j)
      R[j] = array[mid + 1 + j];

    int i = 0, j = 0;
    int k = left;

    // Merge the temp arrays
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        array[k] = L[i];
        i++;
      } else {
        array[k] = R[j];
        j++;
      }
      k++;
    }

    // Copy remaining elements of L[]
    while (i < n1) {
      array[k] = L[i];
      i++;
      k++;
    }

    // Copy remaining elements of R[]
    while (j < n2) {
      array[k] = R[j];
      j++;
      k++;
    }
  }

  // Main function that sorts array[left..right]
  void mergeSort(int array[], int left, int right) {
    if (left < right) {
      int mid = left + (right - left) / 2;

      // Sort first and second halves
      mergeSort(array, left, mid);
      mergeSort(array, mid + 1, right);

      // Merge the sorted halves
      merge(array, left, mid, right);
    }
  }
}
`;

const pythonCode = `# Merge Sort in Python

def mergeSort(array):
    if len(array) > 1:
        mid = len(array) // 2
        L = array[:mid]
        R = array[mid:]

        # Sort the two halves
        mergeSort(L)
        mergeSort(R)

        i = j = k = 0

        # Merge the sorted halves
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                array[k] = L[i]
                i += 1
            else:
                array[k] = R[j]
                j += 1
            k += 1

        # Check for any remaining elements
        while i < len(L):
            array[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            array[k] = R[j]
            j += 1
            k += 1
`;

const jsCode = `// Merge Sort in JavaScript

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // Merge the two arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Concatenate remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}
`;

const cppCode = `// Merge Sort in C++

#include <iostream>
using namespace std;

void merge(int array[], int left, int mid, int right) {
  int n1 = mid - left + 1;
  int n2 = right - mid;

  int* L = new int[n1];
  int* R = new int[n2];

  for (int i = 0; i < n1; i++)
    L[i] = array[left + i];
  for (int j = 0; j < n2; j++)
    R[j] = array[mid + 1 + j];

  int i = 0, j = 0, k = left;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
  }

  delete[] L;
  delete[] R;
}

void mergeSort(int array[], int left, int right) {
  if (left < right) {
    int mid = left + (right - left) / 2;

    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);

    merge(array, left, mid, right);
  }
}
`;