import React, { useEffect, useRef, useState } from "react";
import ArrayVisualizer from "./ArrayViz";
import { applyBinarySearchStep } from "./Algorithms/BinarySearch";
import jsonData from './test-binary.json'
import { Slider } from "./components/slider";
const BinarySearchViz = ({ data, target, algo='binarySearch' }) => {
    const vizRef = useRef();
    const speedRef = useRef(1000); // default 1000ms delay
    const [currentStep, setCurrentStep] = useState(0);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (!vizRef.current) return;
        const step = jsonData[currentStep];
        applyStep(step);
    }, [currentStep]);
    
    useEffect(() => {
        if (playing) {
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

    const applyStep = (step) => {
        if (!vizRef.current) return;
        applyBinarySearchStep(vizRef.current,  data, target, step, speedRef)
    }

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
    // Loads Binary Search Animation/Logic
    // useEffect(() => {
    //     const viz = vizRef.current;
    //     BinarySearchAnim(viz, data, target, jsonData, speedRef);
    // }, [data, target]);

    
    // Changes speed of the animation
    const handleSpeedChange = (newSpeed) => {
        speedRef.current = newSpeed;
    };

    return (
        <>
            <ArrayVisualizer ref={vizRef} data={data} speed={speedRef.current} />
            <Slider speed={speedRef.current} onChange={handleSpeedChange} />
            <div style={{ padding: 10 }}>
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
            </div>
        </>
    );
};


export default BinarySearchViz;