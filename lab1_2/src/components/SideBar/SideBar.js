import React from "react";
import "./SideBar.css";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import logo from "../../assets/img/logo.png";
import { BrowserRouter, Link } from "react-router-dom";

function SideBar() {
    return (
        <nav class="sidebar">
            <div className="text-center my-3">
                <img src={logo} className="w-25" />
            </div>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link to="/" class="nav-link">
                        Home
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/about" class="nav-link">
                        About
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact" class="nav-link">
                        Contact
                    </Link>
                </li>
            </ul>
            <hr/>
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
