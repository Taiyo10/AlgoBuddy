import { useState } from "react";

export const useLogger = () => {
  const [logs, setLogs] = useState([]);

  // printLog appends a log entry to the current logs.
  const printLog = (logEntry) => {
    // Optionally add a timestamp:
    const entry = { timestamp: new Date().toISOString(), ...logEntry };
    setLogs((prevLogs) => [...prevLogs, entry]);
  };

  return { logs, printLog };
};
