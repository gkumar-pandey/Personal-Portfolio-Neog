import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ mode, handleDarkMode, isDarkMode }) {
  let Color = isDarkMode ? "white" : "black";

  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <h3 style={{ color: isDarkMode ? "#36ae7c" : "black" }}>
            Gautam Kumar Pandey
          </h3>
        </div>
        <div className="links">
          <p onClick={handleDarkMode}>{mode}</p>
          <Link to={"/"} style={{ textDecoration: "none", color: `${Color}` }}>
            Home
          </Link>
          <Link
            to={"/project"}
            style={{ textDecoration: "none", color: `${Color}` }}
          >
            Project
          </Link>
          <Link
            to={"/blog"}
            style={{ textDecoration: "none", color: `${Color}` }}
          >
            Blog
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
