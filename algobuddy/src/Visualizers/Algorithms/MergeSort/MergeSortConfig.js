import { applyMergeSortStep } from "./MergeSort"; // assuming you saved it as MergeSort.js

export const mergeSortConfig = {
    name: "Selection Sort",
    visualizer: "array",
    defaultValues: {
        array: [42, 17, 89, 3, 56, 74],
    },
    inputs: {
        array: true,
    },
    applyStep: applyMergeSortStep,
};
