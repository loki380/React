import React from "react";
import "./SideBar.css";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import logo from "../../assets/img/logo.png";

function SideBar() {
    return (
        <nav class="sidebar">
            <div className="text-center my-3">
                <img src={logo} className="w-25" />
            </div>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Layouts
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Cards
                    </a>
                </li>
            </ul>
            <ThemeContext.Consumer>
                {({ changeTheme, incrementFont, decrementFont }) => (
                    <div className="d-flex flex-column">
                        <button
                            onClick={() => changeTheme()}
                            className="btn btn-secondary m-2"
                        >
                            Zmień motyw
                        </button>
                        <button
                            onClick={() => incrementFont()}
                            className="btn btn-secondary m-2"
                        >
                            Powiększ czcionkę
                        </button>
                        <button
                            onClick={() => decrementFont()}
                            className="btn btn-secondary m-2"
                        >
                            Zmniejsz czcionkę
                        </button>
                    </div>
                )}
            </ThemeContext.Consumer>
        </nav>
    );
}

export default SideBar;
