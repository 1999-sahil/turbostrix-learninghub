"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  // Prevent rendering until the component is fully mounted
  if (!mounted) return null;

  return (
    <button
      title="Toggle Theme"
      onClick={toggleTheme}
      className="
        w-12 
        h-6 
        rounded-full
        border
        border-zinc-400
        dark:border-zinc-600
        p-[2px]
        bg-gray-200
        dark:bg-gray-800
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:outline-none 
        focus:ring-1
        focus:ring-[#5645ee]
        dark:focus:ring-[#4534dd]
        focus:border-transparent
      "
    >
      <div
        id="toggle"
        className="
        flex justify-center items-center
          rounded-full 
          w-5
          h-5
          bg-white
          dark:bg-black
          relative
          ml-0
          dark:ml-6 
          pointer-events-none 
          transition-all 
          duration-300 
          ease-out
        "
      >
        {resolvedTheme === "light" ? (
          <Sun className="w-4 h-4 text-gray-800" />
        ) : (
          <Moon className="w-4 h-4 text-gray-200" />
        )}
      </div>
    </button>
  );
}
