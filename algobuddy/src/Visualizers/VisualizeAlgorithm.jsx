import React, { useEffect, useRef, useState } from "react";
import ArrayVisualizer from "./BaseViz/ArrayViz";
import BarVisualizer from "./BaseViz/BarViz"
import { Inputs } from "./components/Inputs";
import { StepController } from "./components/StepController";
import LogViewer from "./components/LogViewer";
import { useLogger } from "./hooks/useLogger";

const visualizers = {
  array: BarVisualizer,
};

const VisualizeAlgorithm = ({ config }) => {
  const vizRef = useRef();
  const speedRef = useRef(1000);

  const { logs, printLog } = useLogger(); // ⬅️ log state + print function

  const { name, visualizer, applyStep, applyAlgorithm, inputs, defaultValues } = config;

  const [data, setData] = useState(defaultValues.array || []);
  const [target, setTarget] = useState(defaultValues.target || null);
  const [key, setKey] = useState(defaultValues.key || null);
  const [reset, setReset] = useState(false);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const runAlgorithm = async () => {
      const logs = await applyAlgorithm(data, target, key);
      setJsonData(logs);
    };
    runAlgorithm();
    setReset(!reset);
  }, [data, target, key]);

  const handleApplyStep = (step) => {
    if (!vizRef.current) return;
    applyStep(vizRef.current, step, { data, target, key, log: printLog }); // ⬅️ pass logger
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
      <StepController jsonData={jsonData} speedRef={speedRef} applyStep={handleApplyStep} reset={reset} />
      <Inputs config={inputs} mapping={mapping} />
      <LogViewer logs={logs} /> {/* ⬅️ add this here */}
    </>
  );
};

export default VisualizeAlgorithm;
