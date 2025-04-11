import { useState, useEffect, useRef } from "react";
import { Slider } from "./Slider";

export const StepController = ({ jsonData, speedRef, applyStep, reset }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [playing, setPlaying] = useState(false);
    
    // If the current step changes, apply the step to the visualizer
    useEffect(() => {
        console.log(jsonData)
        const step = jsonData[currentStep];
        applyStep(step);
    }, [currentStep]);
    
    // If paused/unpaused or speed is updated, update/create/delete animation interval
    useEffect(() => {
        if (playing) {
            applyStep(jsonData[currentStep])
            const interval = setInterval(() => {
                setCurrentStep((prevStep) => {
                    if (prevStep < jsonData.length - 1) {
                        return prevStep + 1;
                    } else {
                        clearInterval(interval);
                        return prevStep;
                    }
                });
            }, speedRef.current);
            return () => clearInterval(interval);
        }
    }, [playing, speedRef.current]);

    // Reset animation on input change
    useEffect(() => {
        setCurrentStep(0);
        applyStep(jsonData[0]);
        setPlaying(false);
    }, [reset]);

    // Go to next step
    const next = () => {
        if (currentStep < jsonData.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    // Go to previous step
    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    // Go to specific step
    const jump = (index) => {
        if (index >= 0 && index < jsonData.length) {
            setCurrentStep(index);
        }
    }

    // Updates speed reference when slider is changed
    const handleSpeedChange = (newSpeed) => {
        speedRef.current = newSpeed;
    };

    return (
        <>
            <Slider speed={speedRef.current} onChange={handleSpeedChange} />
            <button className="p-1 bg-gray-300 dark:bg-[#555] dark:text-[#BCBCBC] rounded ml-1 mr-2" onClick={prev}>Previous</button>
            <button className="p-1 px-2 bg-gray-300 dark:bg-[#555] dark:text-[#BCBCBC] rounded mr-2" onClick={next}>Next</button>
            <button className="p-1 w-16 bg-gray-300 dark:bg-[#555] dark:text-[#BCBCBC] rounded mr-3" onClick={() => setPlaying(!playing)}>
                {playing ? "Pause" : "Play"}
            </button>
            <input
            type="range"
            min={0}
            max={jsonData.length - 1}
            value={currentStep}
            onChange={(e) => jump(Number(e.target.value))}
            className="w-80"
            // style={{ width: "250px", marginLeft: "10px" }}
            />
            <span className="p-1 mx-2"> Step {currentStep + 1} / {jsonData.length} </span>
            <button className="p-1 px-2 bg-gray-300 dark:bg-[#555] dark:text-[#BCBCBC] rounded" onClick={() => {jump(0); setPlaying(false)}}>Reset</button>
        </>
    ) 
    
}