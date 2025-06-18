import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("currUser"));
  const logout = () => {
    localStorage.removeItem("currUser");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
      <div className="container-fluid">
        <Link
          to="/home"
          className="navbar-brand"
          style={{ fontStyle: "italic" }}
        >
          <i className="fa-solid fa-hotel mx-2"></i>
          Ahamd's Luxus Hotel
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user ? (
              <>
                <div className="dropdown">
                  <button
                    id="drop"
                    className="btn btn-dark text-white custom-dropdown-button dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user mx-1"></i> {user.name}
                  </button>
                  <ul
                    id="drop-menu"
                    className="dropdown-menu bg-dark"
                    style={{ minWidth: "auto", padding: "13px", margin: "0" }}
                  >
                    <li className="nav-item">
                      <Link
                        to="/profile"
                        className="text-light bg-dark nav-link"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/logout"
                        className="text-light nav-link"
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                {/* <li className="nav-item">
                  <Link to="/register" className="text-light nav-link">
                    <i className="fa-solid fa-address-card mx-2"></i>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="text-light nav-link">
                    <i className="fa-solid fa-right-to-bracket mx-2"></i>
                    Login
                  </Link>
                </li> */}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
