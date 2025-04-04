import { useState, useEffect, useRef } from "react";
import { Slider } from "./Slider";

export const StepController = ({ jsonData, applyStep, reset }) => {
    const speedRef = useRef(1000); 
    const [currentStep, setCurrentStep] = useState(0);
    const [playing, setPlaying] = useState(false);
    
    useEffect(() => {
        const step = jsonData[currentStep];
        applyStep(step);
    }, [currentStep]);
    
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

    useEffect(() => {
        setCurrentStep(0);
        applyStep(jsonData[0]);
        setPlaying(false);
    }, [reset]);

    const next = () => {
        if (currentStep < jsonData.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    const jump = (index) => {
        if (index >= 0 && index < jsonData.length) {
            setCurrentStep(index);
        }
    }

    // Changes speed of the animation
    const handleSpeedChange = (newSpeed) => {
        speedRef.current = newSpeed;
    };

    return (
        <>
            <Slider speed={speedRef.current} onChange={handleSpeedChange} />
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
            <button onClick={() => setPlaying(!playing)}>
                {playing ? "Pause" : "Play"}
            </button>
            <input
            type="range"
            min={0}
            max={jsonData.length - 1}
            value={currentStep}
            onChange={(e) => jump(Number(e.target.value))}
            style={{ width: "300px", marginLeft: "10px" }}
            />
            <span> Step {currentStep + 1} / {jsonData.length}</span>
            <button onClick={() => {jump(0); setPlaying(false)}}>Reset</button>
        </>
    ) 
    
}