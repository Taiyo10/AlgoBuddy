import React from "react";

export const Outputs = ({ logs }) => {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        color: "#333",
        padding: "10px",
        fontFamily: "monospace",
        maxHeight: "300px",
        overflowY: "scroll",
        border: "1px solid #ccc",
        marginTop: "10px"
      }}
    >
      {logs && logs.length > 0 ? (
        logs.map((log, idx) => (
          <pre key={idx} style={{ marginBottom: "5px" }}>
            {JSON.stringify(log, null, 2)}
          </pre>
        ))
      ) : (
        <div>No logs available</div>
      )}
    </div>
  );
};

export default Outputs;
