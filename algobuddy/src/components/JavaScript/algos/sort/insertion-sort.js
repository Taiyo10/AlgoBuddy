export function mergeSort(arr, logs = []) {
  // Log the current merge sort call with the subarray.
  logs.push({
    action: "merge_sort_call",
    subarray: [...arr],
    array: [...arr]
  });

  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    logs.push({
      action: "split",
      left: [...leftHalf],
      right: [...rightHalf],
      array: [...arr]
    });

    // Recursively sort left and right halves.
    mergeSort(leftHalf, logs);
    mergeSort(rightHalf, logs);

    let i = 0, j = 0, k = 0;

    while (i < leftHalf.length && j < rightHalf.length) {
      logs.push({
        action: "compare",
        left_index: i,
        left_value: leftHalf[i],
        right_index: j,
        right_value: rightHalf[j],
        array: [...arr]
      });

      if (leftHalf[i] < rightHalf[j]) {
        arr[k] = leftHalf[i];
        i++;
      } else {
        arr[k] = rightHalf[j];
        j++;
      }
      k++;

      logs.push({
        action: "merge_step",
        merged_so_far: arr.slice(0, k),
        left_remaining: leftHalf.slice(i),
        right_remaining: rightHalf.slice(j),
        array: [...arr]
      });
    }

    while (i < leftHalf.length) {
      arr[k] = leftHalf[i];
      i++;
      k++;
      logs.push({
        action: "merge_step",
        merged_so_far: arr.slice(0, k),
        left_remaining: leftHalf.slice(i),
        right_remaining: rightHalf.slice(j),
        array: [...arr]
      });
    }

    while (j < rightHalf.length) {
      arr[k] = rightHalf[j];
      j++;
      k++;
      logs.push({
        action: "merge_step",
        merged_so_far: arr.slice(0, k),
        left_remaining: leftHalf.slice(i),
        right_remaining: rightHalf.slice(j),
        array: [...arr]
      });
    }

    logs.push({
      action: "merge_complete",
      merged_result: [...arr],
      array: [...arr]
    });
  } else {
    logs.push({
      action: "base_case",
      subarray: [...arr],
      array: [...arr]
    });
  }

  return logs;
}

// Example usage:
if (typeof window === "undefined") {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  const logs = mergeSort(arr);
  console.log("Logs:", logs);
  console.log("Sorted array is:", arr);
}
