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
        .filter(s => /^-?\d{1,8}$/.test(s))
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
        <div className="flex">
            {config.array && ( // Only allow array input if requested
              <div className="p-1">
                <span className="p-1 pr-2 bg-gray-300 dark:bg-[#555] dark:text-[#BCBCBC] rounded-l">Array:</span>
                <input
                    type="text"
                    value={inputArray}
                    onChange={(e) => {
                        onArrayChange(e);
                    }}
                    placeholder="e.g. 1,2,3"
                    className="my-1 p-0.5 rounded-r text-black"
                    
                />
              </div>
            )}

            {config.target && ( // Only allow target input if requested
              <div className="p-1">
                <label className="p-1 bg-gray-300 dark:bg-[#555] dark:text-[#BCBCBC] rounded-l">Target:</label>
                <input
                    type="number"
                    value={inputTarget}
                    onChange={(e) => {
                        onTargetChange(e);
                    }}
                    placeholder="Target"
                    className="my-1 p-0.5 rounded-r text-black"
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