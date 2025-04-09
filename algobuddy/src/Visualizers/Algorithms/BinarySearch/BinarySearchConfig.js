import { applyBinarySearchStep } from "./BinarySearch";
import { binarySearch } from "../../../components/JavaScript/algos/search/binary-search";

export const binarySearchConfig = {
    name: "Binary Search",
    visualizer: "array",
    defaultValues: {
        array: [1, 3, 5, 7, 9, 11],
        target: 7,
    },
    inputs: {
        array: true,
        target: true,
    },
    applyStep: applyBinarySearchStep,
    applyAlgorithm: binarySearch,
}