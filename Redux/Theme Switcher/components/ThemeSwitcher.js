import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h2 className="text-2xl font-bold">Current Theme: {darkMode ? "Dark" : "Light"}</h2>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
