"use client";

import { THEMES, useThemeStore } from "@/stores/themeStore";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";

export const ThemeToggle = () => {
  const themeStore = useThemeStore();

  useEffect(() => {
    themeStore.loadSavedTheme();
  }, []);

  return (
    <button
      className="rounded-sm"
      type="button"
      aria-label={`Turn on ${themeStore.getNextTheme()} mode`}
      onClick={() => themeStore.cycleThemes()}
    >
      {themeStore.theme === THEMES.DARK ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
