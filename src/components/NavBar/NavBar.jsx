import React from "react";
import { Link } from "react-router-dom";

export const NavbBar = () => {
    return (
        <div className="d-flex justify-content-between">
            {/* <a className="navbar-brand text-light fs-2">Navbar</a> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <Link
                            to="/counter"
                            className="nav-item nav-link active mx-5"
                        >
                            counter
                        </Link>
                        <Link to="/" className=" mx-5 nav-item nav-link">
                            Home
                        </Link>
                        <Link to="/Shop" className=" mx-5 nav-item nav-link">
                            Shop
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default NavbBar;
