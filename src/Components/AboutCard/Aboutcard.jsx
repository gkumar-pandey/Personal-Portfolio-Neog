import React from "react";
import "./AboutCard.css";
function Aboutcard({ title, discription }) {
  return (
    <div className="aboutcard">
      <div className="card">
        <div>
          <h2 className="title">{title}</h2>
        </div>
        <div>
          <p className="discription">{discription}</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutcard;
