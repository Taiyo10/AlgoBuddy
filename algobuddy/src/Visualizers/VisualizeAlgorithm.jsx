import React, { useEffect, useRef, useState } from "react";
import ArrayVisualizer from "./BaseViz/ArrayViz";
import GraphVisualizer from "./BaseViz/GraphViz";
import BarChartVisualizer from "./BaseViz/BarViz";
import { Inputs } from "./components/Inputs";
import { StepController } from "./components/StepController";
import { Outputs } from "./components/Outputs";
import { useLogger } from "./hooks/useLogger";

const visualizers = {
  array: BarChartVisualizer,
  graph: GraphVisualizer,
  // You can add more visualizer types here.
};

const VisualizeAlgorithm = ({ config }) => {
  console.log("cock and balls"); // For debugging; remove in production.
  const vizRef = useRef();
  const speedRef = useRef(1000);

  const { name, visualizer, applyStep, applyAlgorithm, inputs, defaultValues } = config;

  // Use the custom logger hook.
  const { logs, printLog } = useLogger();

  // Defines potential inputs for the algorithm/visualizer.
  const [data, setData] = useState(defaultValues.array);
  const [target, setTarget] = useState(defaultValues.target);
  const [key, setKey] = useState(defaultValues.key);

  const [reset, setReset] = useState(false); // Reset state to reset animation

  // Initialize jsonData (log steps from the algorithm) and include our printLog in the args.
  const [jsonData, setJsonData] = useState(applyAlgorithm([...data], target, key, { log: printLog }));

  // Re-generate logs when any input changes.
  useEffect(() => {
    async function getJson(data, target, key) {
      setJsonData(await applyAlgorithm([...data], target, key, { log: printLog }));
    }
    getJson(data, target, key);
    setReset((prev) => !prev);
  }, [data, target, key]);

  // Applies each step from the algorithm to the visualizer.
  const handleApplyStep = (step) => {
    if (!vizRef.current) return;
    // Pass our log function to the step process.
    const args = { data, target, key, log: printLog };
    applyStep(vizRef.current, step, args);
  };

  // Mapping for Inputs component.
  const mapping = {
    array: { value: data, setValue: setData },
    target: { value: target, setValue: setTarget },
    key: { value: key, setValue: setKey },
  };

  const AlgorithmVisualizer = visualizers[visualizer]; // Chooses the desired visualizer

  return (
    <>
      <AlgorithmVisualizer
        ref={vizRef}
        data={data}
        speed={speedRef.current}
        title={name}
      />
      <StepController
        jsonData={jsonData}
        speedRef={speedRef}
        applyStep={handleApplyStep}
        reset={reset}
      />
      <Inputs config={inputs} mapping={mapping} />
      <Outputs logs={logs} />
    </>
  );
};

export default VisualizeAlgorithm;
