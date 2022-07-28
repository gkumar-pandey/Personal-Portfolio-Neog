import React from "react";
import "./Header.css";

function Header({img}) {
  return (
    <>
      <div className="img-container">
        <img src={img} className="header-img" />
      </div>
    </>
  );
}

export default Header;
