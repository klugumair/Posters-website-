
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      aria-label="Toggle dark mode"
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-card shadow hover:bg-accent transition-colors"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5 text-blue-500" />
      ) : (
        <Moon className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
