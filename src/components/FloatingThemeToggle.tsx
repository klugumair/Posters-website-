
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const FloatingThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card/80 backdrop-blur-md shadow-lg border border-border hover:bg-accent transition-all hover:scale-110"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
};

export default FloatingThemeToggle;
