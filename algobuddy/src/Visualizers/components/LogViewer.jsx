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
        overflowY: "auto",             // Scroll only inside
        color: "#0f0",
        fontFamily: "monospace",
        padding: "0.5rem 1rem",
        boxShadow: "inset 0 0 5px rgba(0,0,0,0.5)",
        fontSize: "0.875rem",          // Same as text-sm
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
      className="rounded-b-xl bg-[#1e1e1e] h-[61vh]"
    >
      {logs.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default LogViewer;
