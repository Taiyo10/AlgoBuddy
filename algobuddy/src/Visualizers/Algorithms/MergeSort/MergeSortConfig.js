import { applyMergeSortStep } from "./MergeSort"; // assuming you saved it as MergeSort.js
import { mergeSort } from "../../../components/JavaScript/algos/sort/merge-sort"
export const mergeSortConfig = {
    name: "Merge Sort",
    visualizer: "chart",
    defaultValues: {
        array: [1, 9, 6, 21, 11],
    },
    inputs: {
        array: true,
    },
    applyStep: applyMergeSortStep,
    applyAlgorithm: mergeSort,
};
