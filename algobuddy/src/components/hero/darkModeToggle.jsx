import React from "react";
import { Moon } from "lucide-react";

const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex flex-col items-center text-white hover:opacity-80"
    >
      <Moon className="h-6 w-6" />
      <span className="text-xs">Night Mode</span>
    </button>
  );
};

export default DarkModeToggle;
