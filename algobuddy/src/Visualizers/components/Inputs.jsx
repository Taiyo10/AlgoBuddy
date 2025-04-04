import { useEffect, useState } from "react";

export const Inputs = ({ config = { array: false, target: false, key: false}, values, onChange }) => {
    const { array, target, key } = config;
    const [inputArray, setInputArray] = useState(values.array?.join(",") || "");
    const [inputTarget, setInputTarget] = useState(values.target || "");
    const [inputKey, setInputKey] = useState(values.key || "");

    const onArrayChange = (e) => {
        const value = e.target.value;
        setInputArray(value);

        // Parse numbers only from fully typed values
        const parsed = value
        .split(",")
        .map(s => s.trim())
        .filter(s => /^\d{1,8}$/.test(s))
        .map(Number);

        onChange.setArray(parsed);
    }
    
    const onTargetChange = (e) => {
        const value = e.target.value;
        setInputTarget(value);
        onChange.setTarget(value);
    }

    const onKeyChange = (e) => {
        const value = e.target.value;
        setInputKey(value);
        onChange.setKey(value);
    }
        

    return (
        <>
            {array && (
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

            {target && (
              <div>
                <label style={{ color: "white" }}>Target:</label>
                <input
                    type="number"
                    value={inputTarget}
                    onChange={(e) => {
                        onTargetChange
                    }}
                    placeholder="Target"
                    style={{ width: "100px", marginLeft: "10px" }}
                />
              </div>
            )}

            {key && (
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