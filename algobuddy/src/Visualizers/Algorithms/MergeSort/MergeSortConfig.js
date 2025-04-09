import { applyMergeSortStep } from "./MergeSort"; // assuming you saved it as MergeSort.js
import { mergeSort } from "../../../components/JavaScript/algos/sort/merge-sort"
export const mergeSortConfig = {
    name: "Merge Sort",
    visualizer: "array",
    defaultValues: {
        array: [42, 17, 89, 3, 56, 74],
    },
    inputs: {
        array: true,
    },
    applyStep: applyMergeSortStep,
    applyAlgorithm: mergeSort,
};
