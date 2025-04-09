import { logInfo } from '../logger.js';

export function mergeSort(arr) {
  // Log the current merge sort call with the subarray.
  logInfo({ action: "merge_sort_call", subarray: [...arr] });
  
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
    
    // Log the split event.
    logInfo({ action: "split", left: leftHalf, right: rightHalf });
    
    // Recursively sort left and right halves.
    mergeSort(leftHalf);
    mergeSort(rightHalf);
    
    let i = 0, j = 0, k = 0;
    
    // Merge the two halves while logging comparisons and merge steps.
    while (i < leftHalf.length && j < rightHalf.length) {
      // Log the comparison between elements.
      logInfo({
        action: "compare",
        left_index: i,
        left_value: leftHalf[i],
        right_index: j,
        right_value: rightHalf[j]
      });
      
      if (leftHalf[i] < rightHalf[j]) {
        arr[k] = leftHalf[i];
        i++;
      } else {
        arr[k] = rightHalf[j];
        j++;
      }
      k++;
      
      // Log the current state of the merge.
      logInfo({
        action: "merge_step",
        merged_so_far: arr.slice(0, k),
        left_remaining: leftHalf.slice(i),
        right_remaining: rightHalf.slice(j)
      });
    }
    
    // Process remaining elements of leftHalf.
    while (i < leftHalf.length) {
      arr[k] = leftHalf[i];
      i++;
      k++;
      logInfo({
        action: "merge_step",
        merged_so_far: arr.slice(0, k),
        left_remaining: leftHalf.slice(i),
        right_remaining: rightHalf.slice(j)
      });
    }
    
    // Process remaining elements of rightHalf.
    while (j < rightHalf.length) {
      arr[k] = rightHalf[j];
      j++;
      k++;
      logInfo({
        action: "merge_step",
        merged_so_far: arr.slice(0, k),
        left_remaining: leftHalf.slice(i),
        right_remaining: rightHalf.slice(j)
      });
    }
    
    // Log the complete merge event for this subarray.
    logInfo({ action: "merge_complete", merged_result: [...arr] });
  } else {
    // Log base case where the subarray is of length 1.
    logInfo({ action: "base_case", subarray: [...arr] });
  }
  
  return arr;
}

// Example usage (Driver Code):
if (typeof window === "undefined") {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  mergeSort(arr);
  console.log("Sorted array is:", arr);
}
