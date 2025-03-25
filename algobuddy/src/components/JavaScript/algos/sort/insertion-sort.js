import { logInfo } from '../logger.js';

export function insertionSort(arr) {
  // Log the initial state of the array.
  logInfo({
    action: "start_sort",
    array: [...arr]
  });
  
  // Start from index 1, since the element at index 0 is trivially sorted.
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    logInfo({
      action: "select_key",
      index: i,
      key: key,
      array: [...arr]
    });
    let j = i - 1;
    
    // Compare key with each element on its left.
    while (j >= 0 && key < arr[j]) {
      logInfo({
        action: "compare",
        key: key,
        key_index: i,
        compare_index: j,
        compare_value: arr[j]
      });
      // Shift the element one position to the right.
      arr[j + 1] = arr[j];
      logInfo({
        action: "shift",
        from_index: j,
        to_index: j + 1,
        shifted_value: arr[j],
        array_state: [...arr]
      });
      j -= 1;
    }
    
    // Insert the key at its correct position.
    arr[j + 1] = key;
    logInfo({
      action: "insert",
      insert_index: j + 1,
      inserted_key: key,
      array_state: [...arr]
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
if (typeof window === 'undefined') {
  const arr = [64, 34, 25, 12, 22, 11, 90];
  insertionSort(arr);
  console.log("Sorted array is:", arr);
}
