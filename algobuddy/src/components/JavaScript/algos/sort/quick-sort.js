export function quickSort(arr, low = 0, high = arr.length - 1, logs = []) {
  // Log the current quick sort call on the subarray.
  logs.push({
    action: "quick_sort_call",
    low,
    high,
    subarray: arr.slice(low, high + 1),
    array: [...arr]
  });

  if (low < high) {
    const pi = partition(arr, low, high, logs);

    logs.push({
      action: "partition_complete",
      pivot_index: pi,
      subarray_after_partition: arr.slice(low, high + 1),
      array: [...arr]
    });

    // Log the pivot that has finished sorting.
    logs.push({
      action: "number_sorted",
      index: pi,
      value: arr[pi],
      array: [...arr]
    });

    quickSort(arr, low, pi - 1, logs);
    quickSort(arr, pi + 1, high, logs);
  } else {
    logs.push({
      action: "quick_sort_no_action",
      low,
      high,
      subarray: arr.slice(low, high + 1),
      array: [...arr]
    });
  }

  // When the outermost call finishes, log the completed sort.
  if (low === 0 && high === arr.length - 1) {
    logs.push({
      action: "quick_sort_end",
      result: "sorted",
      array: [...arr]
    });
  }

  return logs;
}

function partition(arr, low, high, logs) {
  const pivot = arr[high];

  logs.push({
    action: "pivot_chosen",
    pivot_index: high,
    pivot_value: pivot,
    subarray: arr.slice(low, high + 1),
    array: [...arr]
  });

  let i = low - 1;

  for (let j = low; j < high; j++) {
    logs.push({
      action: "compare",
      current_index: j,
      current_value: arr[j],
      pivot_index: high,
      pivot_value: pivot,
      subarray: arr.slice(low, high + 1),
      array: [...arr]
    });

    if (arr[j] < pivot) {
      i++;
      logs.push({
        action: "swap",
        indices: [i, j],
        values: [arr[i], arr[j]],
        subarray_before_swap: arr.slice(low, high + 1),
        array: [...arr]
      });
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      logs.push({
        action: "no_swap",
        current_index: j,
        current_value: arr[j],
        pivot_value: pivot,
        reason: "current_value not less than pivot",
        subarray: arr.slice(low, high + 1),
        array: [...arr]
      });
    }
  }

  logs.push({
    action: "swap",
    indices: [i + 1, high],
    values: [arr[i + 1], arr[high]],
    subarray_before_swap: arr.slice(low, high + 1),
    array: [...arr]
  });

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Driver Code (for testing purposes)
if (typeof window === "undefined") {
  const arr = [64, 34, 25, 12, 22, 11, 90];
  const logs = quickSort(arr);
  console.log("Logs:", logs);
  console.log("Sorted array is:", arr);
}
