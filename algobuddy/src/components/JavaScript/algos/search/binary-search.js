// binarySearch.js
import { logInfo } from '../logger.js';

export function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  logInfo({
    action: "binary_search_start",
    array: arr,
    target: target,
    low,
    high
  });

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    logInfo({
      action: "check",
      low,
      high,
      mid,
      value_at_mid: arr[mid]
    });
    
    if (arr[mid] === target) {
      logInfo({
        action: "found",
        index: mid,
        value: arr[mid],
        low,
        high
      });
      logInfo({
        action: "binary_search_end",
        result: mid
      });
      return mid;
    } else if (arr[mid] < target) {
      logInfo({
        action: "search_right",
        mid,
        value_at_mid: arr[mid],
        target,
        new_low: mid + 1,
        high
      });
      low = mid + 1;
    } else {
      logInfo({
        action: "search_left",
        mid,
        value_at_mid: arr[mid],
        target,
        low,
        new_high: mid - 1
      });
      high = mid - 1;
    }
  }

  logInfo({
    action: "not_found",
    target,
    final_low: low,
    final_high: high
  });
  logInfo({
    action: "binary_search_end",
    result: -1
  });
  return -1;
}
