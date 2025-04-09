// heapsort.js
import { logInfo } from '../logger.js';

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function logSwap(i, j, arr, type = "swap") {
  logInfo({
    action: type,
    index1: i,
    index2: j,
    value1: arr[i],
    value2: arr[j],
    array: [...arr]
  });
}

function heapify(arr, length, i) {
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
    swap(arr, i, largest);
    logSwap(i, largest, arr, "swap");
    heapify(arr, length, largest);
  }
}

export function heapsortWithLogging(arr) {
  const n = arr.length;

  logInfo({ action: "start_sort", array: [...arr] });

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    logSwap(0, i, arr, "extract_and_swap");
    logInfo({
      action: "extract_max",
      index: i,
      fixedValue: arr[i],
      array: [...arr]
    });
    heapify(arr, i, 0);
  }

  logInfo({ action: "end_sort", array: [...arr] });

  return arr;
}

// Driver code for testing
if (typeof window === "undefined") {
    const testArray = [5, 3, 6, 1, 9, 2];
    console.log("Original array:", [...testArray]);
    const sorted = heapsortWithLogging([...testArray]);
    console.log("Sorted result:", sorted);    
}
