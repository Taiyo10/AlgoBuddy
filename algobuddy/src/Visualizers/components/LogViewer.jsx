import React, { useEffect, useRef } from "react";

const LogViewer = ({ logs }) => {
  const endRef = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div
      style={{
        height: "50vw",
        width: "35vw",
        overflowY: "auto",
        backgroundColor: "#111",
        color: "#0f0",
        fontFamily: "monospace",
        padding: "1rem",
      }}
      className="rounded-b-xl"
    >
      {logs.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default LogViewer;
