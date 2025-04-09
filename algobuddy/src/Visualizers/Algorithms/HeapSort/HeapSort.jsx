import { colours } from "../../../Theme/Colours";
export const applyHeapSortStep = async (viz, step, args) => {
    const {base, highlight, found, checking} = colours;
    const {data } = args;

    if (step.action == "start_sort") {
        viz.setTitle("Heap Sort");
        viz.setCircleColours((_, i) => i === i, base);
        viz.setArray(step.array);
        viz.clearQueue();
    }
    else if (step.action == "swap") {
        viz.setTitle(`Swapping ${step.value1} and ${step.value2}`);
        viz.setCircleColours((_, i) => i == step.index1 || i == step.index2, checking);
        viz.setArray(step.array);
        viz.enqueue(() => viz.swapBoxes(step.index1, step.index2));
        viz.clearQueue();
    }
    else if (step.action == "extract_and_swap") { //Swap root element with the last element
        viz.setTitle(`Swapping Root and ${step.value2}`);
        viz.setArray(step.array);
        viz.enqueue(() => viz.swapBoxes(step.index1, step.index2));
        viz.clearQueue();
    }
    else if (step.action == "extract_max") {
        viz.setTitle(`${step.fixedValue} is sorted`);
        viz.setCircleColours((_, i) => i == step.index, found);
        viz.setArray(step.array);
        viz.clearQueue();
    }
    else if (step.action == "end_sort") {
        viz.setTitle(`Graph is sorted`);
        viz.setCircleColours((_, i) => i == i, found);
        viz.setArray(step.array);
        viz.clearQueue();
    }
}