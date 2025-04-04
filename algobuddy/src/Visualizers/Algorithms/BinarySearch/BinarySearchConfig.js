import { applyBinarySearchStep } from "./BinarySearch";

export const binarySearchConfig = {
    name: "Binary Search",
    visualizer: "array", // could also be "graph", "matrix", etc.
    defaultValues: {
        array: [1, 3, 5, 7, 9, 11],
        target: 7,
    },
    inputs: {
        array: true,
        target: true,
    },
    applyStep: applyBinarySearchStep, 
}