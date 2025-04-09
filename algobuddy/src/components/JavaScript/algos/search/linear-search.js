export async function linearSearch(arr, target) {
  const logs = [];

  logs.push({
    action: "start_search",
    target,
    array: [...arr],
    length: arr.length
  });

  for (let i = 0; i < arr.length; i++) {
    logs.push({
      action: "check",
      index: i,
      value: arr[i],
      array: [...arr]
    });

    if (arr[i] === target) {
      logs.push({
        action: "found",
        index: i,
        value: arr[i],
        array: [...arr]
      });
      logs.push({
        action: "end_search",
        result: i,
        array: [...arr]
      });
      return logs;
    }
  }

  logs.push({
    action: "not_found",
    target,
    array: [...arr]
  });

  logs.push({
    action: "end_search",
    result: -1,
    array: [...arr]
  });

  return logs;
}
