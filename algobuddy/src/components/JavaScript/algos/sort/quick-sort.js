import { logInfo } from '../logger.js';

export function quickSort(arr, low, high) {
  // Log the quick sort call with the current subarray.
  logInfo({
    action: "quick_sort_call",
    low: low,
    high: high,
    subarray: arr.slice(low, high + 1)
  });

  if (low < high) {
    // Partition the array and get the pivot index.
    const pi = partition(arr, low, high);

    // Log the completion of partitioning.
    logInfo({
      action: "partition_complete",
      pivot_index: pi,
      subarray_after_partition: arr.slice(low, high + 1)
    });

    // Recursively sort the left subarray.
    quickSort(arr, low, pi - 1);
    // Recursively sort the right subarray.
    quickSort(arr, pi + 1, high);
  } else {
    // If the subarray has one or no element, no action is needed.
    logInfo({
      action: "quick_sort_no_action",
      low: low,
      high: high,
      subarray: arr.slice(low, high + 1)
    });
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];

  // Log the chosen pivot.
  logInfo({
    action: "pivot_chosen",
    pivot_index: high,
    pivot_value: pivot,
    subarray: arr.slice(low, high + 1)
  });

  let i = low - 1;

  for (let j = low; j < high; j++) {
    // Log the comparison event.
    logInfo({
      action: "compare",
      current_index: j,
      current_value: arr[j],
      pivot_index: high,
      pivot_value: pivot,
      subarray: arr.slice(low, high + 1)
    });

    if (arr[j] < pivot) {
      i += 1;
      const swap_from = arr[i];
      const swap_to = arr[j];
      // Log the swap event.
      logInfo({
        action: "swap",
        indices: [i, j],
        values: [swap_from, swap_to],
        subarray_before_swap: arr.slice(low, high + 1)
      });
      // Swap elements.
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      // Log a no-swap event when no swap is performed.
      logInfo({
        action: "no_swap",
        current_index: j,
        current_value: arr[j],
        pivot_value: pivot,
        reason: "current_value not less than pivot",
        subarray: arr.slice(low, high + 1)
      });
    }
  }

  // Final swap to place the pivot in its correct position.
  const swap_from = arr[i + 1];
  const swap_to = arr[high];
  logInfo({
    action: "swap",
    indices: [i + 1, high],
    values: [swap_from, swap_to],
    subarray_before_swap: arr.slice(low, high + 1)
  });
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

// Driver Code (for testing purposes)
if (typeof window === "undefined") {
  const arr = [64, 34, 25, 12, 22, 11, 90];
  quickSort(arr, 0, arr.length - 1);
  console.log("Sorted array is:", arr);
}
