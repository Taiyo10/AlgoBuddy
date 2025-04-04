import { useState } from "react";

export const Inputs = ({ config, mapping }) => {
    const [inputArray, setInputArray] = useState(mapping.array?.value.join(",") || "");
    const [inputTarget, setInputTarget] = useState(mapping.target?.value || "");
    const [inputKey, setInputKey] = useState(mapping.key?.value || "");

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
    
    const onTargetChange = (e) => {
        const value = e.target.value;
        setInputTarget(value);
        mapping.target.setValue(value);
    }

    const onKeyChange = (e) => {
        const value = e.target.value;
        setInputKey(value);
        mapping.key.setValue(value);
    }
        

    return (
        <>
            {config.array && (
              <div>
                <label style={{ color: "white" }}>Array:</label>
                <input
                    type="text"
                    value={inputArray}
                    onChange={(e) => {
                        onArrayChange(e);
                    }}
                    placeholder="e.g. 1,2,3"
                    style={{ width: "300px", marginLeft: "10px" }}
                />
              </div>
            )}

            {config.target && (
              <div>
                <label style={{ color: "white" }}>Target:</label>
                <input
                    type="number"
                    value={inputTarget}
                    onChange={(e) => {
                        onTargetChange(e);
                    }}
                    placeholder="Target"
                    style={{ width: "100px", marginLeft: "10px" }}
                />
              </div>
            )}

            {config.key && (
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

        </>
    )
}