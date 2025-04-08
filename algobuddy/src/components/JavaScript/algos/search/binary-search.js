export function binarySearch(arr, target) {
  const logs = [];
  let low = 0;
  let high = arr.length - 1;

  logs.push({
    action: "binary_search_start",
    array: [...arr],
    target,
    low,
    high
  });

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    logs.push({
      action: "check",
      low,
      high,
      mid,
      value_at_mid: arr[mid],
      array: [...arr]
    });

    if (arr[mid] === target) {
      logs.push({
        action: "found",
        index: mid,
        value: arr[mid],
        low,
        high,
        array: [...arr]
      });
      logs.push({
        action: "binary_search_end",
        result: mid,
        array: [...arr]
      });
      return { result: mid, logs };
    } else if (arr[mid] < target) {
      logs.push({
        action: "search_right",
        mid,
        value_at_mid: arr[mid],
        target,
        new_low: mid + 1,
        high,
        array: [...arr]
      });
      low = mid + 1;
    } else {
      logs.push({
        action: "search_left",
        mid,
        value_at_mid: arr[mid],
        target,
        low,
        new_high: mid - 1,
        array: [...arr]
      });
      high = mid - 1;
    }
  }

  logs.push({
    action: "not_found",
    target,
    final_low: low,
    final_high: high,
    array: [...arr]
  });
  logs.push({
    action: "binary_search_end",
    result: -1,
    array: [...arr]
  });

  return { result: -1, logs };
}
