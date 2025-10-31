import { create } from "zustand";

const USER_SAVED_THEME_KEY = "user-pref-theme";
const THEME_DATA_ATTRIBUTE_NAME = "data-theme";

const THEMES = {
    DARK: "dark",
    LIGHT: "light",
} as const;

type Themes = (typeof THEMES)[keyof typeof THEMES];

interface ThemeState {
    theme: Themes;
}

interface ThemeAction {
    cycleThemes: () => void;
    setTheme: (value: Themes) => void;
    loadSavedTheme: () => void;
    getNextTheme: () => Themes;
}

const matchPreferDarkColorScheme = () => window.matchMedia("(prefers-color-scheme:dark)").matches;

const useThemeStore = create<ThemeState & ThemeAction>()((set, get) => ({
    theme: THEMES.LIGHT,
    setTheme(value) {
        set({ theme: value });
        localStorage.setItem(USER_SAVED_THEME_KEY, value);
        document.documentElement.setAttribute(THEME_DATA_ATTRIBUTE_NAME, value);
    },
    cycleThemes() {
        const { setTheme, getNextTheme } = get();
        setTheme(getNextTheme());
    },
    loadSavedTheme() {
        const { setTheme } = get();
        const savedTheme = String(localStorage.getItem(USER_SAVED_THEME_KEY)) as Themes;
        if (Object.values(THEMES).includes(savedTheme)) {
            setTheme(savedTheme);
        } else if (matchPreferDarkColorScheme()) {
            setTheme(THEMES.DARK);
        }
    },
    getNextTheme: () => {
        const { theme } = get();
        return theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    },
}));

export {
    THEME_DATA_ATTRIBUTE_NAME,
    THEMES,
    USER_SAVED_THEME_KEY,
    useThemeStore,
    type ThemeAction,
    type Themes,
    type ThemeState,
};
