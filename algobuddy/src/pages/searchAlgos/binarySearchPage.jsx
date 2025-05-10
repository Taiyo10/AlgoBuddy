import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";
import { binarySearchConfig } from "@/Visualizers/Algorithms/BinarySearch/BinarySearchConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";


const BinarySearchPage = () => {
  return (
    <div className="overflow-y-scroll h-[90vh]">
      <div id="top-container" className="h-[22vh] flex justify-between">
        <div id="title-container-outer" className="w-[60vw] flex items-center">
          <div
            id="title-container-inner"
            className="h-[20.6vh] w-[57vw] ml-auto flex flex-col"
          >
            <div id="title" className="h-[12vh] py-4 ">
              <img
                id="title-1"
                src="./binary-title.png"
                alt=""
                className="h-[4.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./binary-title-dark-mode.png"
                alt=""
                className="h-[4.5vh] hidden dark:block"
              />
              <img
                id="title-2"
                src="./search-title.png"
                alt=""
                className="h-[4.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./search-title-dark-mode.png"
                alt=""
                className="h-[4.5vh] hidden dark:block"
              />
            </div>
            <div id="preamble">
              <h2 id="preamble-text" className="text-[0.8vw] font-dmsans">
                In computer science, binary search, also known as half-interval
                search, logarithmic search, or binary chop, is a search
                algorithm that finds the position of a target value within a
                sorted array. Binary search compares the target value to the
                middle element of the array. If they are not equal, the half in
                which the target cannot lie is eliminated and the search
                continues on the remaining half, again taking the middle element
                to compare to the target value, and repeating this until the
                target value is found. If the search ends with the remaining
                half being empty, the target is not in the array.
              </h2>
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
            <img
              src="./binary-search-icon.png"
              alt=""
              className="w-[10vw]"
            />
          </div>
        </div>
      </div>
      <VisualizeAlgorithm config={binarySearchConfig}/>
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

export default BinarySearchPage;

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
  
  # Note: Array must be sorted for binary search to work
  
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