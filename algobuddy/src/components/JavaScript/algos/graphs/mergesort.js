export function mergeSort(arr, logs = [], startIndex = 0, depth = 0, id = "0") {
    // Log the initial merge sort call for this subarray.
    logs.push({
      action: "merge_sort_call",
      id, // Unique identifier for this subarray
      subarray: [...arr],
      range: [startIndex, startIndex + arr.length - 1],
      depth,
      array: [...arr]
    });
  
    if (arr.length > 1) {
      const mid = Math.floor(arr.length / 2);
      const leftHalf = arr.slice(0, mid);
      const rightHalf = arr.slice(mid);
  
      // Log a "split" step. Notice we assign new IDs for the left and right halves.
      logs.push({
        action: "split",
        parentId: id,               // ID of the parent subarray
        leftId: id + "0",           // e.g. "00"
        rightId: id + "1",          // e.g. "01"
        left: [...leftHalf],
        right: [...rightHalf],
        leftRange: [startIndex, startIndex + mid - 1],
        rightRange: [startIndex + mid, startIndex + arr.length - 1],
        depth: depth + 1,
        array: [...arr]
      });
  
      // Recursively sort left and right halves, passing down their IDs.
      mergeSort(leftHalf, logs, startIndex, depth + 1, id + "0");
      mergeSort(rightHalf, logs, startIndex + mid, depth + 1, id + "1");
  
      let i = 0, j = 0, k = 0;
    
      while (i < leftHalf.length && j < rightHalf.length) {
        logs.push({
          action: "compare",
          id, // ID for the current merging context
          left_index: startIndex + i,
          left_value: leftHalf[i],
          right_index: startIndex + mid + j,
          right_value: rightHalf[j],
          depth,
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
          id, // use the parent's id (or you can include a new field like resultId if you wish)
          merged_so_far: arr.slice(0, k),
          global_range: [startIndex, startIndex + k - 1],
          left_remaining: leftHalf.slice(i),
          right_remaining: rightHalf.slice(j),
          depth,
          array: [...arr]
        });
      }
    
      while (i < leftHalf.length) {
        arr[k] = leftHalf[i];
        i++;
        k++;
        logs.push({
          action: "merge_step",
          id,
          merged_so_far: arr.slice(0, k),
          global_range: [startIndex, startIndex + k - 1],
          left_remaining: leftHalf.slice(i),
          right_remaining: rightHalf.slice(j),
          depth,
          array: [...arr]
        });
      }
    
      while (j < rightHalf.length) {
        arr[k] = rightHalf[j];
        j++;
        k++;
        logs.push({
          action: "merge_step",
          id,
          merged_so_far: arr.slice(0, k),
          global_range: [startIndex, startIndex + k - 1],
          left_remaining: leftHalf.slice(i),
          right_remaining: rightHalf.slice(j),
          depth,
          array: [...arr]
        });
      }
    
      logs.push({
        action: "merge_complete",
        id,
        merged_result: [...arr],
        range: [startIndex, startIndex + arr.length - 1],
        depth,
        array: [...arr]
      });
    } else {
      logs.push({
        action: "base_case",
        id,
        subarray: [...arr],
        range: [startIndex, startIndex],
        depth,
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
  