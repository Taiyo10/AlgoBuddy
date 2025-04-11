import { bubbleSort } from "../../../components/JavaScript/algos/sort/bubble-sort";
import { applyBubbleSortStep } from "./BubbleSort";

export const bubbleSortConfig = {
    name: "Bubble Sort",
    visualizer: "array",
    defaultValues: {
        array: [42, 17,89,3,56,74],
    },
    inputs: {
        array: true,
    },
    applyStep: applyBubbleSortStep, 
    applyAlgorithm: bubbleSort,
}