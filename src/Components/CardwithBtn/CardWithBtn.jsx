import React from "react";
import { Link } from "react-router-dom";

function CardWithBtn({ title, discription, query, qName }) {
  return (
    <div className="aboutcard">
      <div className="card">
        <div>
          <h2 className="title">{title}</h2>
        </div>
        <div>
          <p className="discription">{discription}</p>
        </div>
        <button className="btn">
          <Link to={query} style={style.link}>
            {qName}
          </Link>
        </button>
      </div>
    </div>
  );
}
const style = {
  link: {
    textDecoration: "none",
    color: "white",
  },
};

export default CardWithBtn;
