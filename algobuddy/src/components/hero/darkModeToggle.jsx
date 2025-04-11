import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex flex-col items-center text-white dark:text-white transition duration-300"
    >
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      <span className="text-xs mt-1">{isDark ? "Light Mode" : "Night Mode"}</span>
    </button>
  );
};

export default DarkModeToggle;
