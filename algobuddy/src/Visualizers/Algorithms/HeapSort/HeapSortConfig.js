import { applyHeapSortStep } from "./HeapSort";

export const heapSortConfig = {
    name: "Heap Sort",
    visualizer: "graph",
    defaultValues: {
        array: [5, 3, 6, 1, 9, 2],
    },
    inputs: {
        array: true,
    },
    applyStep: applyHeapSortStep, 
}