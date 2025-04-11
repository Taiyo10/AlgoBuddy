import { colours } from "../../../Theme/Colours";
export const applyLinearSearchStep = async (viz, step, args) => {
    const {base, highlight, found, checking} = colours;
    const {data, target} = args;
    
    if (step.action == "start_search") {
        viz.setRectColours((_, i) => i === i, base);
        viz.setTitle("Linear Search");
    }
    else if (step.action == "check") {
        viz.setRectColours((_, i) => i < step.index, base);
        viz.setRectColours((_, i) => i == step.index, checking);
        viz.setRectColours((_, i) => i > step.index, highlight);
        viz.setTitle(`Checking ${step.value} == ${target}`);
    }
    else if (step.action == "found") {
        viz.setRectColours((_, i) => i == step.index, found);
        viz.setRectColours((_, i) => i != step.index, base);
        viz.setTitle(`Found ${step.value}!!`);
    }
    else if (step.action == "not_found") {
        viz.setRectColours((_, i) => i == i, notFound);
        viz.setTitle(`${target} not found`);
    }
}