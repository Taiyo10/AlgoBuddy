// logger.js
export function logInfo(info) {
    // Add a timestamp and ensure a consistent format
    const logEntry = {
      timestamp: new Date().toISOString(),
      ...info
    };
    console.log(JSON.stringify(logEntry, null, 2));
  }
  