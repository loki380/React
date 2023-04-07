import React from "react";

function NavBar() {
    return (
        <div class="box bg-white shadow w-100 p-3 mb-4">
            <form class="d-flex">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button class="btn" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
}

export default NavBar;
