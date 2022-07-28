import React from "react";

function ProjectCard({ title, tech, discription, liveLink, sourceLink, date }) {
  return (
    <div className="aboutcard">
      <div className="card">
        <div>
          <h2 className="title">{title}</h2>
        </div>
        <div>
          <p>{date}</p>
        </div>
        <div>
          <p>{tech}</p>
        </div>
        <div>
          <p>{discription}</p>
        </div>
        <div>
          <a href={liveLink} target="_blank">
            <button>Live Demo</button>
          </a>
          <a href={sourceLink} target="_blank">
            <button>Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
