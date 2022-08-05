import React from "react";
import './BlogCard.css'

function BlogCard({ title, discription, BlogLink }) {
  return (
    <div className="aboutcard">
      <div className="card">
        <div>
          <h2 style={{fontSize: '1.7rem'}}>{title}</h2>
        </div>
        <div>
          <p className="discription">{discription}</p>
        </div>
        <a href={BlogLink} target="_blank">
          <button className="btn">Read Blog</button>
        </a>
      </div>
    </div>
  );
}


export default BlogCard;
