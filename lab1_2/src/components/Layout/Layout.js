import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import Chat from "../ChatWrapper/Chat/Chat";

function Layout() {
    return (
        <div class="d-flex vh-100">
            <SideBar />
            <div class="d-flex flex-column w-100 p-3">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
