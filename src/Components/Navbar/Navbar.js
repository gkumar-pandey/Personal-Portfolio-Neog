import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ mode, handleDarkMode }) {
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <h3>Gautam Kumar Pandey</h3>
        </div>
        <div className="links">
          <p onClick={handleDarkMode}>{mode}</p>
          <Link to={"/"} style={style.link}>
            Home
          </Link>
          <Link to={"/project"} style={style.link}>
            Project
          </Link>
          <Link to={"/blog"} style={style.link}>
            Blog
          </Link>
        </div>
      </nav>
    </div>
  );
}
const style = {
  link: {
    textDecoration: "none",
    color: "black",
  },
};

export default Navbar;
