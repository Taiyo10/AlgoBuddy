import { logInfo } from '../logger.js';

export function selectionSort(arr) {
  // Log the start of the sort process.
  logInfo({
    action: "start_sort",
    array: [...arr]
  });
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    // Log the start of the current iteration with the subarray starting from index i.
    logInfo({
      action: "iteration_start",
      iteration: i,
      subarray: arr.slice(i)
    });
    let minIndex = i;
    // Log the initial assumption for the minimum value.
    logInfo({
      action: "select_initial_min",
      index: i,
      value: arr[i]
    });

    for (let j = i + 1; j < n; j++) {
      // Log each comparison between the current minimum and the candidate element.
      logInfo({
        action: "compare",
        index1: minIndex,
        value1: arr[minIndex],
        index2: j,
        value2: arr[j]
      });
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        // Log when a new minimum is found.
        logInfo({
          action: "new_min_found",
          min_index: minIndex,
          min_value: arr[minIndex]
        });
      }
    }

    // Log the swap event before performing it.
    logInfo({
      action: "swap",
      index1: i,
      value1: arr[i],
      index2: minIndex,
      value2: arr[minIndex],
      array_before_swap: [...arr]
    });
    // Perform the swap.
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    // Log the array state after the swap is complete.
    logInfo({
      action: "swap_complete",
      index1: i,
      value1: arr[i],
      index2: minIndex,
      value2: arr[minIndex],
      array_after_swap: [...arr]
    });
  }

  // Log the final sorted array.
  logInfo({
    action: "sorted",
    sorted_array: [...arr]
  });
  return arr;
}

// Driver Code (for testing purposes)
if (typeof window === "undefined") {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  selectionSort(arr);
  console.log("Sorted array is:", arr);
}
