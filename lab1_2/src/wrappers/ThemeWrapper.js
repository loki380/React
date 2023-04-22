import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext";

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.light);
    const [fontSize, setFontSize] = useState(15);

    function changeTheme() {
        if (theme === themes.light) {
            setTheme(themes.dark);
        } else if (theme === themes.dark) {
            setTheme(themes.light);
        }
    }

    function incrementFont() {
        let newSize = fontSize+1;
        setFontSize(newSize);
    }

    function decrementFont() {
        let newSize = fontSize-1;
        setFontSize(newSize);
    }

    useEffect(() => {
        const boxes = document.getElementsByClassName("box");
        const buttons = document.getElementsByClassName("btn");
        switch (theme) {
            case themes.light:
                document.body.classList.remove("bg-dark", "text-light");
                document.body.classList.add("bg-light", "text-dark");
                Array.from(boxes).forEach((el) => {
                    el.classList.add("bg-white");
                    el.classList.remove("bg-secondary");
                });
                Array.from(buttons).forEach((el) => {
                    el.classList.add("btn-secondary");
                    el.classList.remove("btn-light");
                });
                break;
            case themes.dark:
                document.body.classList.remove("bg-light", "text-dark");
                document.body.classList.add("bg-dark", "text-light");
                Array.from(boxes).forEach((el) => {
                    el.classList.add("bg-secondary");
                    el.classList.remove("bg-white");
                });
                Array.from(buttons).forEach((el) => {
                    el.classList.add("btn-light");
                    el.classList.remove("btn-secondary");
                });
                break;
            default:
                break;
        }
        document.documentElement.style.fontSize = fontSize + 'px';
    }, [theme, fontSize]);

    return (
        <ThemeContext.Provider
            value={{ theme: theme, changeTheme: changeTheme, incrementFont: incrementFont, decrementFont: decrementFont }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
}
