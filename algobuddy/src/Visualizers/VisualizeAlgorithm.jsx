import React, { useEffect, useRef, useState } from "react";
import ArrayVisualizer from "./BaseViz/ArrayViz";
import GraphVisualizer from "./BaseViz/GraphViz";
import jsonData from "./Algorithms/BubbleSort/test-bubble.json";
// import mergeSort from "./../../src/components/JavaScript/algos/graphs/mergesort.js";
import { Inputs } from "./components/Inputs";
import { StepController } from "./components/StepController";
const visualizers = {
    array: ArrayVisualizer,
    // chart: ChartVisualizer,
     graph: GraphVisualizer,
}

const VisualizeAlgorithm = ({ config }) => {
    const vizRef = useRef();
    const speedRef = useRef(1000);

    const {name, visualizer, applyStep, inputs, defaultValues} = config

    // Defines potential inputs for the algorithm/visualizer
    const [data, setData] = useState(defaultValues.array || [1, 3, 5, 7, 9, 11]);
    const [target, setTarget] = useState(defaultValues.target || 7);
    const [key, setKey] = useState(defaultValues.key || null);

    const [reset, setReset] = useState(false); // Reset state to reset animation
    //const [jsonData, setJsonData] = useState(mergeSort(data)); // JSON data for the algorithm

    // Reset animation when any input changes
    useEffect(() => {
        //setJsonData(mergeSort(data))
        setReset(!reset);
    }, [data, target, key]);
    
    // Applies change to visualizer depending on step in algorithm
    const handleApplyStep = (step) => {
        if (!vizRef.current) return;
        const args = {data, target, key};
        applyStep(vizRef.current, step, args); // applyStep function from config
    }

    // Maps input values and setters for input component
    const mapping = {
        array: { value: data, setValue: setData },
        target: { value: target, setValue: setTarget },
        key: { value: key, setValue: setKey }
    };

    const AlgorithmVisualizer = visualizers[visualizer]; // Selects needed visualizer based on config

    return (
        <>
            <AlgorithmVisualizer ref={vizRef} data={data} speed={speedRef.current} title={name} />
            <StepController jsonData={jsonData} speedRef={speedRef} applyStep={handleApplyStep} reset={reset} />
            <Inputs config = {inputs} mapping = {mapping} />
        </>
    );
};


export default VisualizeAlgorithm;