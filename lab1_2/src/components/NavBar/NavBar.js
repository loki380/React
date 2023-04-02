import React from "react";

function NavBar() {
    return (
        <div class="bg-light shadow w-100 p-3">
            <form class="d-flex">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
}

export default NavBar;
