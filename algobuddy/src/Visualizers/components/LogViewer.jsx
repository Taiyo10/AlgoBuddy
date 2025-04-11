import React, { useEffect, useRef } from "react";

const LogViewer = ({ logs }) => {
  const endRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    if (endRef.current && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100%",                // Fills its container height
        maxHeight: "16rem",            // Tailwind max-h-64 equivalent
        minHeight: "16rem",            // Force full height from the start
        overflowY: "auto",             // Scroll only inside
        backgroundColor: "#000",
        color: "#0f0",
        fontFamily: "monospace",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        boxShadow: "inset 0 0 5px rgba(0,0,0,0.5)",
        fontSize: "0.875rem",          // Same as text-sm
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {logs.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default LogViewer;
