export function heapSort(arr) {
  const logs = [];
  const n = arr.length;

  // Log the initial state of the array.
  logs.push({
    action: "start_sort",
    array: [...arr]
  });

  // Build max heap.
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i, logs);
  }

  // Extract elements from the heap one by one.
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    logSwap(0, i, arr, "extract_and_swap", logs);
    logs.push({
      action: "extract_max",
      index: i,
      fixedValue: arr[i],
      array: [...arr]
    });
    heapify(arr, i, 0, logs);
  }

  // Log the final sorted array.
  logs.push({
    action: "end_sort",
    array: [...arr]
  });

  return logs;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function logSwap(i, j, arr, type = "swap", logs) {
  logs.push({
    action: type,
    index1: i,
    index2: j,
    value1: arr[i],
    value2: arr[j],
    array: [...arr]
  });
}

function heapify(arr, length, i, logs) {
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
    logSwap(i, largest, arr, "swap", logs);
    heapify(arr, length, largest, logs);
  }
}

// Driver Code (for testing purposes)
if (typeof window === "undefined") {
  const testArray = [5, 3, 6, 1, 9, 2];
  console.log("Original array:", [...testArray]);
  const logs = heapsortWithLogging([...testArray]);
  console.log("Logs:", logs);
  console.log("Sorted result:", logs[logs.length - 1].array);
}
