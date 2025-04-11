import React, { useEffect, useRef, useState } from "react";
import ArrayVisualizer from "./BaseViz/ArrayViz";
import GraphVisualizer from "./BaseViz/GraphViz";
import BarChartVisualizer from "./BaseViz/BarViz";
import { Inputs } from "./components/Inputs";
import { StepController } from "./components/StepController";
import LogViewer from "./components/LogViewer"; // ⬅️ New import
import { useLogger } from "./hooks/useLogger";

const visualizers = {
  array: BarChartVisualizer,
  graph: GraphVisualizer,
};

const VisualizeAlgorithm = ({ config }) => {
  const vizRef = useRef();
  const speedRef = useRef(1000);

  const { name, visualizer, applyStep, applyAlgorithm, inputs, defaultValues } = config;

  const { logs, printLog } = useLogger();

  const [data, setData] = useState(defaultValues.array);
  const [target, setTarget] = useState(defaultValues.target);
  const [key, setKey] = useState(defaultValues.key);
  const [reset, setReset] = useState(false);

  const [jsonData, setJsonData] = useState(
    applyAlgorithm([...data], target, key, { log: printLog })
  );

  useEffect(() => {
    async function getJson(data, target, key) {
      setJsonData(await applyAlgorithm([...data], target, key, { log: printLog }));
    }
    getJson(data, target, key);
    setReset((prev) => !prev);
  }, [data, target, key]);

  const handleApplyStep = (step) => {
    if (!step || !vizRef.current) return;
    const args = { data, target, key, log: printLog };
    applyStep(vizRef.current, step, args);
  };

  const mapping = {
    array: { value: data, setValue: setData },
    target: { value: target, setValue: setTarget },
    key: { value: key, setValue: setKey },
  };

  const AlgorithmVisualizer = visualizers[visualizer];

  return (
    <>
      <AlgorithmVisualizer ref={vizRef} data={data} speed={speedRef.current} title={name} />
      <StepController
        jsonData={jsonData}
        speedRef={speedRef}
        applyStep={handleApplyStep}
        reset={reset}
      />
      <Inputs config={inputs} mapping={mapping} />
      <LogViewer logs={logs} /> {/* ⬅️ Use ViewLogger */}
    </>
  );
};

export default VisualizeAlgorithm;
