function linearSearch(arr, N, x) {
    const logs = [];
  
    // Log the start of the search process.
    logs.push({
      action: "start_search",
      target: x,
      array: [...arr],
      length: N
    });
  
    for (let i = 0; i < N; i++) {
      logs.push({
        action: "check",
        index: i,
        value: arr[i],
        array: [...arr]
      });
  
      if (arr[i] === x) {
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
        return { result: i, logs };
      }
    }
  
    logs.push({
      action: "not_found",
      target: x,
      array: [...arr]
    });
    logs.push({
      action: "end_search",
      result: -1,
      array: [...arr]
    });
  
    return { result: -1, logs };
  }
  
  // Driver Code
  const arr = [1, 3, 5, 7, 9, 11, 13, 0, 2, 4, 6, 8, 10, 12, 14];
  const sortedArray = arr.slice().sort((a, b) => a - b);
  const x = 10;
  const N = sortedArray.length;
  
  // Function call
  const { result, logs } = linearSearch(sortedArray, N, x);
  
  console.log("Logs:", logs);
  if (result === -1) {
    console.log("Element is not present in array");
  } else {
    console.log("Element is present at index", result);
  }
  