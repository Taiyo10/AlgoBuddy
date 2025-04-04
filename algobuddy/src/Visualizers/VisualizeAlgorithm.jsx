import React, { useEffect, useRef, useState } from "react";
import ArrayVisualizer from "./BaseViz/ArrayViz";
import jsonData from "./Algorithms/BinarySearch/test-binary.json";
import { Inputs } from "./components/Inputs";
import { StepController } from "./components/StepController";
const visualizers = {
    array: ArrayVisualizer,
    // chart: ChartVisualizer,
    // graph: GraphVisualizer,
}

const VisualizeAlgorithm = ({ config }) => {
    const vizRef = useRef();

    const {name, visualizer, applyStep, inputs, defaultValues} = config

    const [data, setData] = useState(defaultValues.array || [1, 3, 5, 7, 9, 11]);
    const [target, setTarget] = useState(defaultValues.target || 7);
    const [key, setKey] = useState(defaultValues.key || null);

    const [reset, setReset] = useState(false);

    useEffect(() => {
        setReset(!reset);
    }, [data, target, key]);
    
    const handleApplyStep = (step) => {
        if (!vizRef.current) return;
        const args = {data, target, key};
        applyStep(vizRef.current, step, args);
    }

    const mapping = {
        array: { value: data, setValue: setData },
        target: { value: target, setValue: setTarget },
        key: { value: key, setValue: setKey }
    };

    const AlgorithmVisualizer = visualizers[visualizer];

    return (
        <>
            <AlgorithmVisualizer ref={vizRef} data={data} title={name} />
            <StepController jsonData={jsonData} applyStep={handleApplyStep} reset={reset} />
            <Inputs config = {inputs} mapping = {mapping} />
        </>
    );
};


export default VisualizeAlgorithm;