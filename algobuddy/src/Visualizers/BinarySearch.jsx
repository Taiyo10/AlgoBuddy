import React, { useEffect, useRef, useState } from "react";
import ArrayVisualizer from "./BaseViz/ArrayViz";
import { applyBinarySearchStep } from "./Algorithms/BinarySearch";
import jsonData from './test-binary.json'
import { Slider } from "./components/slider";
const BinarySearchViz = () => {
    const vizRef = useRef();
    const speedRef = useRef(1000); 
    const [currentStep, setCurrentStep] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [data, setData] = useState([1, 3, 5, 7, 9, 11]);
    const [inputValue, setInputValue] = useState(data.join(","));
    const [target, setTarget] = useState(7);

    useEffect(() => {
        if (!vizRef.current) return;
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

    
    // Changes speed of the animation
    const handleSpeedChange = (newSpeed) => {
        speedRef.current = newSpeed;
    };

    return (
        <>
            <ArrayVisualizer ref={vizRef} data={data} speed={speedRef.current} title={"Binary Search"} />
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
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        const value = e.target.value;
                        setInputValue(value);

                        // Parse numbers only from fully typed values
                        const parsed = value
                        .split(",")
                        .map(s => s.trim())
                        .filter(s => /^\d{1,8}$/.test(s))
                        .map(Number);

                        setData(parsed);
                        applyStep(jsonData[0]); 
                        setPlaying(false);
                    }}
                    placeholder="e.g. 1,2,3"
                    style={{ width: "300px", marginLeft: "10px" }}
                />
                <input
                    type="number"
                    value={target}
                    onChange={(e) => {
                        const value = e.target.value;
                        setTarget(value);
                        applyStep(jsonData[0]); 
                        setPlaying(false);
                    }}
                    placeholder="Target"
                    style={{ width: "100px", marginLeft: "10px" }}
                />
            </div>
        </>
    );
};


export default BinarySearchViz;