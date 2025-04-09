import { useEffect, useState } from "react";

export const Slider = ({ speed, onChange }) => {
    const [value, setValue] = useState(speed);

    // Update internal state if the speed prop changes
    useEffect(() => {
        setValue(speed);
    }, [speed]);

    // Handle slider value change
    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setValue(newValue); // Update internal state
        onChange(newValue); // Notify parent component
    };

    return (
        <div style={{ padding: "10px", color: "white" }}>
            <label>Speed: {value} ms</label>
            <input
                type="range"
                min="100"
                max="3000"
                step="10"
                value={value}
                onChange={handleChange}
                style={{ width: "300px", marginLeft: "10px" }}
            />
        </div>
    );
};
