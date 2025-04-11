import { useState } from "react";

export const Inputs = ({ config, mapping }) => {
    const [inputArray, setInputArray] = useState(mapping.array?.value.join(",") || "");
    const [inputTarget, setInputTarget] = useState(mapping.target?.value || "");
    const [inputKey, setInputKey] = useState(mapping.key?.value || "");

    // Update array input and visual
    const onArrayChange = (e) => {
        const value = e.target.value;
        setInputArray(value);

        // Parse numbers only from fully typed values
        const parsed = value
        .split(",")
        .map(s => s.trim())
        .filter(s => /^\d{1,8}$/.test(s))
        .map(Number);

        mapping.array.setValue(parsed);
    }
    
    // Update target value
    const onTargetChange = (e) => {
        const value = e.target.value;
        setInputTarget(parseInt(value));
        mapping.target.setValue(parseInt(value));
    }

    // Update key value
    const onKeyChange = (e) => {
        const value = e.target.value;
        setInputKey(value);
        mapping.key.setValue(value);
    }
        

    return (
        <div>
            {config.array && ( // Only allow array input if requested
              <div className="p-1">
                <span className="p-1 pr-2 h-30 bg-gray-400">Array</span>
                <input
                    type="text"
                    value={inputArray}
                    onChange={(e) => {
                        onArrayChange(e);
                    }}
                    placeholder="e.g. 1,2,3"
                    className="my-1 p-0.5"
                    
                />
              </div>
            )}

            {config.target && ( // Only allow target input if requested
              <div>
                <label className="p-1">Target</label>
                <input
                    type="number"
                    value={inputTarget}
                    onChange={(e) => {
                        onTargetChange(e);
                    }}
                    placeholder="Target"
                    className="mb-1 p-0.5"
                />
              </div>
            )}

            {config.key && ( // Only allow key input if requested
              <div>
                <label style={{ color: "white" }}>Key:</label>
                <input
                    type="number"
                    value={inputKey}
                    onChange={(e) => {
                        onKeyChange(e);
                    }}
                    placeholder="Key"
                    style={{ width: "100px", marginLeft: "10px" }}
                />
              </div>
            )}
        </div>
    )
}