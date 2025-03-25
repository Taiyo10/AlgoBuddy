// bubbleSort.js
import { logInfo } from '../logger.js';

export function bubbleSort(arr, logCallback = logInfo) {
  const n = arr.length;
  logCallback({ action: "bubble_sort_start", array: [...arr] });
  
  for (let i = 0; i < n; i++) {
    logCallback({ action: "pass_start", pass: i, array: [...arr] });
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      logCallback({
        action: "compare",
        pass: i,
        index1: j,
        index2: j + 1,
        value1: arr[j],
        value2: arr[j + 1]
      });
      
      if (arr[j] > arr[j + 1]) {
        logCallback({
          action: "swap",
          pass: i,
          index1: j,
          index2: j + 1,
          value1: arr[j],
          value2: arr[j + 1],
          array_before_swap: [...arr]
        });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        logCallback({
          action: "swap_complete",
          pass: i,
          index1: j,
          index2: j + 1,
          array_after_swap: [...arr]
        });
      } else {
        logCallback({
          action: "no_swap",
          pass: i,
          index1: j,
          index2: j + 1,
          value1: arr[j],
          value2: arr[j + 1]
        });
      }
    }
    
    logCallback({ action: "pass_end", pass: i, array: [...arr] });
    if (!swapped) {
      logCallback({ action: "early_termination", pass: i, array: [...arr] });
      break;
    }
  }
  
  logCallback({ action: "bubble_sort_end", sorted_array: [...arr] });
  return arr;
}
