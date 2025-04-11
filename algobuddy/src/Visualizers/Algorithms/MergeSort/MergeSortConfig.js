import { applyMergeSortStep } from "./MergeSort-special"; // assuming you saved it as MergeSort.js
import { mergeSort } from "../../../components/JavaScript/algos/sort/mergesort-special"
export const mergeSortConfig = {
    name: "Merge Sort",
    visualizer: "chart",
    defaultValues: {
        array: [42, 17, 89, 3, 56, 74],
    },
    inputs: {
        array: true,
    },
    applyStep: applyMergeSortStep,
    applyAlgorithm: mergeSort,
};
