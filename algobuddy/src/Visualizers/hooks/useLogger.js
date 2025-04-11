import { useState } from "react";

export const useLogger = () => {
  const [logs, setLogs] = useState([]);

  // Appends a plain string log (with optional timestamp)
  const printLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prevLogs) => [...prevLogs, `[${timestamp}] ${message}`]);
  };

  return { logs, printLog };
};
