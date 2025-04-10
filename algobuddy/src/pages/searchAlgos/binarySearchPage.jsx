import React from "react";

// Code snippets
const javaCode = `// Binary Search in Java

// Note: Array must be sorted for binary search to work

class BinarySearch {
  public static int binarySearch(int array[], int x) {
    int left = 0, right = array.length - 1;
    
    while (left <= right) {
      int mid = left + (right - left) / 2;

      // Check if x is present at mid
      if (array[mid] == x)
        return mid;

      // If x greater, ignore left half
      if (array[mid] < x)
        left = mid + 1;

      // If x is smaller, ignore right half
      else
        right = mid - 1;
    }

    // If we reach here, then the element was not present
    return -1;
  }
}
`;

const pythonCode = `# Binary Search in Python

// Note: Array must be sorted for binary search to work

def binarySearch(array, x):
    left = 0
    right = len(array) - 1

    while left <= right:
        mid = left + (right - left) // 2

        # Check if x is present at mid
        if array[mid] == x:
            return mid

        # If x greater, ignore left half
        elif array[mid] < x:
            left = mid + 1

        # If x is smaller, ignore right half
        else:
            right = mid - 1

    # If we reach here, then the element was not present
    return -1
`;

const jsCode = `// Binary Search in JavaScript

// Note: Array must be sorted for binary search to work

function binarySearch(array, x) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    // Check if x is present at mid
    if (array[mid] === x) {
      return mid;
    }

    // If x greater, ignore left half
    if (array[mid] < x) {
      left = mid + 1;
    }
    // If x is smaller, ignore right half
    else {
      right = mid - 1;
    }
  }

  // If we reach here, then the element was not present
  return -1;
}
`;

const cppCode = `// Binary Search in C++

// Note: Array must be sorted for binary search to work

#include <iostream>
using namespace std;

int binarySearch(int array[], int x, int size) {
  int left = 0, right = size - 1;

  while (left <= right) {
    int mid = left + (right - left) / 2;

    // Check if x is present at mid
    if (array[mid] == x)
      return mid;

    // If x greater, ignore left half
    if (array[mid] < x)
      left = mid + 1;

    // If x is smaller, ignore right half
    else
      right = mid - 1;
  }

  // If we reach here, then the element was not present
  return -1;
}
`;

const BinarySearchPage = () => {
    return <div>BinarySearchPage</div>;
  };
  
  export default BinarySearchPage;