import React, { useEffect, useRef, useState } from "react";
import ArrayVisualizer from "./BaseViz/ArrayViz";
import BarChartVisualizer from "./BaseViz/BarViz";
import GraphVisualizer from "./BaseViz/GraphViz";
import { Inputs } from "./components/Inputs";
import { StepController } from "./components/StepController";
import LogViewer from "./components/LogViewer";
import { useLogger } from "./hooks/useLogger";


const visualizers = {
    array: ArrayVisualizer,
    chart: BarChartVisualizer,
    graph: GraphVisualizer,
    
}



const VisualizeAlgorithm = ({ config }) => {
  const vizRef = useRef();
  const speedRef = useRef(1000);

  const { logs, printLog } = useLogger();

    const {name, visualizer, applyStep, applyAlgorithm, inputs, defaultValues} = config

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
        <div className="flex justify-center visualier bg-accent dark:bg-[#00320A] p-4">
            <div className="flex">
                <div className="mr-4">
                    <AlgorithmVisualizer ref={vizRef} data={data} speed={speedRef.current} title={name} />
                    <div className="bg-[#eaeaea] dark:bg-[#2d2d2d] w-[55vw] rounded-b-xl p-2 ">
                        <StepController jsonData={jsonData} speedRef={speedRef} applyStep={handleApplyStep} reset={reset} />
                        <Inputs config = {inputs} mapping = {mapping} />
                    </div>
                </div>
                <div>
                    <div className="flex items-center w-[35vw] rounded-t-xl gap-2 p-2 bg-[#eaeaea] dark:bg-[#2d2d2d] text-gray-400">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-yellow-500" />
                        <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <LogViewer logs={logs} />
                </div>
            </div>
        </div>
    );
};

export default VisualizeAlgorithm;