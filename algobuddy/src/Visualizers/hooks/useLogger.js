import { useState } from "react";

export const useLogger = () => {
  const [logs, setLogs] = useState([]);

  // Accept either a string or a full object for flexibility
  const printLog = (entry) => {
    const logEntry = typeof entry === "string"
      ? { message: entry }
      : entry;

    const withTimestamp = {
      timestamp: new Date().toISOString(),
      ...logEntry,
    };

    setLogs((prevLogs) => [...prevLogs, withTimestamp]);
  };

  return { logs, printLog };
};
