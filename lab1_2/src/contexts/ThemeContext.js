import { createContext } from "react";

export const themes = {
    dark: "bg-dark",
    light: "bg-light",
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {},
    incrementFont: () => {},
    decrementFont: () => {},
});
