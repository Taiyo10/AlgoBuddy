import { logInfo } from './logger.js';

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function logSwap(i, j, arr, type = "swap", smallestSortedIndex = null) {
  logInfo({
    action: type,
    index1: i,
    index2: j,
    value1: arr[i],
    value2: arr[j],
    array: [...arr],
    smallestSortedIndex
  });
}

function heapify(arr, length, i, smallestSortedIndex) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < length && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < length && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      const preSwap = [...arr]; // capture array before this swap
      logSwap(i, largest, preSwap, "swap", smallestSortedIndex);
      swap(arr, i, largest);
      heapify(arr, length, largest, smallestSortedIndex); // recursive call also logs
    }
}
  

export function heapsortWithLogging(arr) {
  const n = arr.length;

  logInfo({ action: "start_sort", array: [...arr], smallestSortedIndex: null });

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i, null);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    logSwap(0, i, arr, "extract_and_swap", i);
    logInfo({
      action: "extract_max",
      index: i,
      fixedValue: arr[i],
      array: [...arr],
      smallestSortedIndex: i
    });
    heapify(arr, i, 0, i);
  }

  logInfo({
    action: "end_sort",
    array: [...arr],
    smallestSortedIndex: 0
  });

  return arr;
}

// Driver code for testing
if (typeof window === "undefined") {
  const testArray = [5, 3, 6, 1, 9, 2];
  console.log("Original array:", [...testArray]);
  const sorted = heapsortWithLogging([...testArray]);
  console.log("Sorted result:", sorted);
}
