import { logInfo } from '../logger.js'; 

function search(arr, N, x) {
// Log the start of the search process.
logInfo({
    action: "start_search",
    target: x,
    array: [...arr],
    length: N
});

for (let i = 0; i < N; i++) {
    // Log the check at the current index.
    logInfo({
    action: "check",
    index: i,
    value: arr[i]
    });
    if (arr[i] === x) {
    // Log when the target is found.
    logInfo({
        action: "found",
        index: i,
        value: arr[i]
    });
    logInfo({
        action: "end_search",
        result: i
    });
    return i;
    }
}

// Log if the target was not found.
logInfo({
    action: "not_found",
    target: x
});
logInfo({
    action: "end_search",
    result: -1
});
return -1;
}

// Driver Code
const arr = [1, 3, 5, 7, 9, 11, 13, 0, 2, 4, 6, 8, 10, 12, 14];
// Sort the array before performing the search.
const sortedArray = arr.slice().sort((a, b) => a - b);
const x = 10;
const N = sortedArray.length;

// Function call
const result = search(sortedArray, N, x);
if (result === -1) {
console.log("Element is not present in array");
} else {
console.log("Element is present at index", result);
}
