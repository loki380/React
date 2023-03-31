import React from "react";
import './SideBar.css';

function SideBar() {
    return (
        <nav class="sidebar">
            <div>LOGO</div>
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
        </nav>
    );
}

export default SideBar;
