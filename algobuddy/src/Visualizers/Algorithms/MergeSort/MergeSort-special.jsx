import { colours } from "../../../Theme/Colours";
export const applyMergeSortStep = async (viz, step, args) => {
    const {base, highlight, found, checking} = colours;
    const {data} = args;

    if (step.action == "merge_sort_call") {
        viz.setTitle("Merge Sort");
        viz.setRectColours((_, i) => i === i, base);
        viz.setArray(step.array);
        viz.clearQueue();
    }
    else if (step.action == "split") {
        viz.enqueue(() => viz.subArray("0", "01", step.rightRange, 1, step.right));
        console.log(step);
        //viz.enqueue(() => viz.subArray("0", "01", step.rightRange, 1, step.array));

        // viz.setRectColours((_, i) => i === i, highlight);
        // viz.setRectColours((_, i) => i > (step.array.length-1) - step.pass, found);
        // viz.setTitle(`Pass ${step.pass}`);
        // viz.setArray(step.array);
    }
    // else if (step.action == "compare") {
    //     viz.setRectColours((_, i) => i < step.index1, base);
    //     viz.setRectColours((_, i) => i == step.index1 || i == step.index2, checking);
    //     viz.setRectColours((_, i) => i > step.index2, highlight);
    //     viz.setRectColours((_, i) => i > (step.array.length-1) - step.pass, found);
    //     viz.setArray(step.array);
    //     viz.setTitle(`Comparing ${step.value1} and ${step.value2}`);
    // }
    // else if (step.action == "swap") {
    //     viz.setTitle(`Swapping ${step.value1} and ${step.value2}`);
    //     viz.setRectColours((_, i) => i < step.index1, base);
    //     viz.setRectColours((_, i) => i == step.index1 || i == step.index2, checking);
    //     viz.setRectColours((_, i) => i > step.index2, highlight);
    //     viz.setRectColours((_, i) => i > (step.array_before_swap.length-1) - step.pass, found);
    //     viz.setArray(step.array_before_swap);
    //     viz.enqueue(() => viz.swapBoxes(step.index1, step.index2));
    // }
    // else if (step.action == "pass_end") {
    //     viz.setRectColours((_, i) => i === i, base);
    //     viz.setRectColours((_, i) => i > (step.array.length-1) - step.pass - 1, found);
    //     viz.setArray(step.array);
    //     viz.setTitle(`Pass ${step.pass} complete`);
    // }
    // else if (step.action == "bubble_sort_end") {
    //     viz.setRectColours((_, i) => i === i, found);
    //     viz.setTitle("Bubble Sort Complete");
    //     viz.setArray(step.sorted_array);
    //     viz.clearQueue();
    // }

}