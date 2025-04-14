import { applySelectionSortStep } from "./SelectionSort"; // assuming you saved it as selectionSort.js
import { selectionSort } from "../../../components/JavaScript/algos/sort/selection-sort"
export const selectionSortConfig = {
    name: "Selection Sort",
    visualizer: "chart",
    defaultValues: {
        array: [19, 1, 97, 42, 13, 8],
    },
    inputs: {
        array: true,
    },
    applyStep: applySelectionSortStep,
    applyAlgorithm: selectionSort,
};
