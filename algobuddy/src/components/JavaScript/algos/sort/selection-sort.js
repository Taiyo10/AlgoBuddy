export function selectionSort(arr) {
  const logs = [];

  logs.push({
    action: "start_sort",
    array: [...arr]
  });

  const n = arr.length;

  for (let i = 0; i < n; i++) {
    logs.push({
      action: "iteration_start",
      iteration: i,
      subarray: arr.slice(i),
      array: [...arr]
    });

    let minIndex = i;

    logs.push({
      action: "select_initial_min",
      index: i,
      value: arr[i],
      array: [...arr]
    });

    for (let j = i + 1; j < n; j++) {
      logs.push({
        action: "compare",
        index1: minIndex,
        value1: arr[minIndex],
        index2: j,
        value2: arr[j],
        array: [...arr]
      });

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        logs.push({
          action: "new_min_found",
          min_index: minIndex,
          min_value: arr[minIndex],
          array: [...arr]
        });
      }
    }

    logs.push({
      action: "swap",
      index1: i,
      value1: arr[i],
      index2: minIndex,
      value2: arr[minIndex],
      array_before_swap: [...arr],
      array: [...arr]
    });

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

    logs.push({
      action: "swap_complete",
      index1: i,
      value1: arr[i],
      index2: minIndex,
      value2: arr[minIndex],
      array_after_swap: [...arr],
      array: [...arr]
    });
  }

  logs.push({
    action: "sorted",
    sorted_array: [...arr],
    array: [...arr]
  });

  return logs;
}

// Driver Code (for testing purposes)
if (typeof window === "undefined") {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  const logs = selectionSort(arr);
  console.log("Logs:", logs);
  console.log("Sorted array is:", arr);
}
