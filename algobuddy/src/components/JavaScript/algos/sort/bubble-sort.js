// bubbleSort.js

export function bubbleSort(arr) {
  const n = arr.length;
  const logs = [];

  logs.push({ action: "bubble_sort_start", array: [...arr] });

  for (let i = 0; i < n; i++) {
    logs.push({ action: "pass_start", pass: i, array: [...arr] });
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      logs.push({
        action: "compare",
        pass: i,
        index1: j,
        index2: j + 1,
        value1: arr[j],
        value2: arr[j + 1],
        array: [...arr]
      });

      if (arr[j] > arr[j + 1]) {
        logs.push({
          action: "swap",
          pass: i,
          index1: j,
          index2: j + 1,
          value1: arr[j],
          value2: arr[j + 1],
          array: [...arr]
        });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      } 
    }

    logs.push({ action: "pass_end", pass: i, array: [...arr] });

    if (!swapped) {
      logs.push({ action: "early_termination", pass: i, array: [...arr] });
      break;
    }
  }

  logs.push({ action: "bubble_sort_end", array: [...arr]});

  return logs;
}

if (typeof window === "undefined") {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  const logs = bubbleSort(arr);
  console.log("Logs:", logs);
  console.log("Sorted array is:", arr);
}
