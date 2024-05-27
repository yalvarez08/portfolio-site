"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = "light" | "dark";
const ThemeChangeContext =  createContext<ThemeContextType | null>(null);

type ThemeContextProps = {
    children: React.ReactNode;
  };
  
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
  };

export default function ThemeContext({
    children } : ThemeContextProps) {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light")
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
      
            if (localTheme === "dark") {
              document.documentElement.classList.add("dark");
            }
          } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
          }
    }, [])

  return (
        <ThemeChangeContext.Provider value={{
            theme,
            toggleTheme,
          }}
        >
          {children}
        </ThemeChangeContext.Provider>
  )
}

export function useTheme() {
    const context = useContext(ThemeChangeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContext");
  }
  return context;
}
