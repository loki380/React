import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

function Layout() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (!user) {
            navigate("/signin");
        }
    });

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
