import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const user = {
            login: login,
            password: password,
        }

        localStorage.setItem('user', JSON.stringify(user));
        navigate("/");
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-5 bg-white shadow">
                <form
                    onSubmit={handleSubmit}
                    className="d-flex h-100 flex-column justify-content-center align-items-center gap-2"
                >
                    <div className="form-group">
                        <input
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            type="text"
                            className="form-control"
                            id="login"
                            placeholder="Login"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-50">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
