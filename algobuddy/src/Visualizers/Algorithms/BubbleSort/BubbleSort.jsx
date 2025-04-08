import { colours } from "../../../Theme/Colours";
export const applyBubbleSortStep = async (viz, step, args) => {
    const {base, highlight, found, checking} = colours;
    const {data } = args;

    if (step.action == "bubble_sort_start") {
        viz.setTitle("Bubble Sort");
        viz.setArray(step.array);
    }
    else if (step.action == "pass_start") {
        viz.setRectColours((_, i) => i === i, highlight);
        viz.setRectColours((_, i) => i > (step.array.length-1) - step.pass, found);
        viz.setTitle(`Pass ${step.pass}`);
        viz.setArray(step.array);
    }
    else if (step.action == "compare") {
        viz.setRectColours((_, i) => i < step.index1, base);
        viz.setRectColours((_, i) => i == step.index1 || i == step.index2, checking);
        viz.setRectColours((_, i) => i > step.index2, highlight);
        // viz.setRectColours((_, i) => i > (step.array.length-1) - step.pass, found);
        viz.setTitle(`Comparing ${step.value1} and ${step.value2}`);
    }
    else if (step.action == "swap") {
        viz.setTitle(`Swapping ${step.value1} and ${step.value2}`);
        viz.setRectColours((_, i) => i < step.index1, base);
        viz.setRectColours((_, i) => i == step.index1 || i == step.index2, checking);
        viz.setRectColours((_, i) => i > step.index2, highlight);
        viz.setRectColours((_, i) => i > (step.array_before_swap.length-1) - step.pass, found);
        viz.setArray(step.array_before_swap);
        await viz.swapBoxes(step.index1, step.index2);
    }
    else if (step.action == "pass_end") {
        viz.setRectColours((_, i) => i === i, base);
        viz.setRectColours((_, i) => i > (step.array.length-1) - step.pass - 1, found);
        viz.setTitle(`Pass ${step.pass} complete`);
    }
    
}