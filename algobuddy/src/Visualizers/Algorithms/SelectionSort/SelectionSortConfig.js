import { applySelectionSortStep } from "./SelectionSort"; // assuming you saved it as selectionSort.js
import { selectionSort } from "../../../components/JavaScript/algos/sort/selection-sort"
export const selectionSortConfig = {
    name: "Selection Sort",
    visualizer: "chart",
    defaultValues: {
        array: [42, 17, 89, 3, 56, 74],
    },
    inputs: {
        array: true,
    },
    applyStep: applySelectionSortStep,
    applyAlgorithm: selectionSort,
};
