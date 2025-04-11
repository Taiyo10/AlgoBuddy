import React, { useEffect, useRef, useState } from "react";
import ArrayVisualizer from "./BaseViz/ArrayViz";
import GraphVisualizer from "./BaseViz/GraphViz";
import { Inputs } from "./components/Inputs";
import { StepController } from "./components/StepController";

const visualizers = {
    array: ArrayVisualizer,
    // chart: ChartVisualizer,
    graph: GraphVisualizer,
}



const VisualizeAlgorithm =({ config }) => {
    const vizRef = useRef();
    const speedRef = useRef(1000);

    const {name, visualizer, applyStep, applyAlgorithm, inputs, defaultValues} = config

    // Defines potential inputs for the algorithm/visualizer
    const [data, setData] = useState(defaultValues.array);
    const [target, setTarget] = useState(defaultValues.target);
    const [key, setKey] = useState(defaultValues.key);

    const [reset, setReset] = useState(false); // Reset state to reset animation

    const [jsonData, setJsonData] = useState(applyAlgorithm([...data],target,key))

    // Reset animation when any input changes
    useEffect(() => {
        async function getJson(data,target, key) {
            setJsonData(await applyAlgorithm([...data],target,key))
        }
        getJson(data, target, key);
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
        <div className="flex justify-center visualier bg-accent dark:bg-[#00320A] p-4">
            <div>
                {/* <div className="flex items-center w-[55vw] rounded-t-xl gap-2 p-2 bg-[#eaeaea] dark:bg-[#2d2d2d] text-gray-400">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                </div> */}
                <AlgorithmVisualizer ref={vizRef} data={data} speed={speedRef.current} title={name} />
                <div className="bg-[#eaeaea] dark:bg-[#2d2d2d] w-[55vw] rounded-b-xl p-2 ">
                    <StepController jsonData={jsonData} speedRef={speedRef} applyStep={handleApplyStep} reset={reset} />
                    <Inputs config = {inputs} mapping = {mapping} />
                </div>
            </div>
        </div>
    );
};


export default VisualizeAlgorithm;