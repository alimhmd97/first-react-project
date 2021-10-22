import React from "react";
import { Link } from "react-router-dom";

export const NavbBar = () => {
    return (
        <div className="d-flex justify-content-between ">
            <nav className="navbar navbar-expand-lg navbar-light navbar navbar-dark bg-dark ">
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    {" "}
                    <p className="navbar-brand px-3 fw-bold ">
                        React.Portfolio
                    </p>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light navbar navbar-dark bg-dark ">
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav NaV">
                        <Link
                            to="/counter"
                            className="nav-item nav-link active mx-5 NaVbar"
                        >
                            counter
                        </Link>
                        <Link to="/" className=" mx-5 nav-item nav-link NaVbar">
                            Home
                        </Link>
                        <Link
                            to="/Shop"
                            className=" mx-5 nav-item nav-link NaVbar"
                        >
                            Shop
                        </Link>
                        <Link
                            to="/Todo"
                            className=" mx-5 nav-item nav-link NaVbar"
                        >
                            Todo
                        </Link>
                        <Link
                            to="/LoginForm"
                            className=" mx-5 nav-item nav-link NaVbar"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className=" mx-5 nav-item nav-link NaVbar"
                        >
                            register
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default NavbBar;
