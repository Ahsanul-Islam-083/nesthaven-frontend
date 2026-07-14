"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
}

interface UseThemeProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  resolvedTheme: string | undefined;
}

const ThemeContext = createContext<UseThemeProps>({
  theme: undefined,
  setTheme: () => {},
  resolvedTheme: undefined,
});

function getSystemTheme(): string {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: string) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export function ThemeProvider({ children, defaultTheme = "system" }: ThemeProviderProps) {
  const [theme, setThemeState] = useState("light");
  const [resolvedTheme, setResolvedThemeState] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored || defaultTheme;
    const resolved = initial === "system" ? getSystemTheme() : initial;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(initial);
    setResolvedThemeState(resolved);
    applyTheme(resolved);
  }, [defaultTheme]);

  useEffect(() => {
    const resolved = theme === "system" ? getSystemTheme() : theme;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResolvedThemeState(resolved);
    try { localStorage.setItem("theme", theme); } catch { /* noop */ }
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        const s = getSystemTheme();
        setResolvedThemeState(s);
        applyTheme(s);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = useCallback((newTheme: string) => {
    setThemeState(newTheme);
    const resolved = newTheme === "system" ? getSystemTheme() : newTheme;
    applyTheme(resolved);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): UseThemeProps {
  return useContext(ThemeContext);
}
