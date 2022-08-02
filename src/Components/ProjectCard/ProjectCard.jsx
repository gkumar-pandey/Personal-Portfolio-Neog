import React from "react";

function ProjectCard({
  title,
  tech,
  discription,
  liveLink,
  sourceLink,
  date,
  mark,
  isDarkMode
}) {
  const color = isDarkMode? '#00ffab': 'black';
  return (
    
    <div className="aboutcard">
      <div className="card">
        <div>
          <h2 className="title">{title}</h2>
          <h3 className="mark" style={{color:`${color}`}}>{mark}</h3>
        </div>
        <div>
          <p className="date">{date}</p>
        </div>
        <div>
          <p className="tech" style={{color: `${color}`}}>{tech}</p>
        </div>
        <div>
          <p className="discription">{discription}</p>
        </div>
        <div>
          <a href={liveLink} target="_blank">
            <button className="live-btn">Live Demo</button>
          </a>
          <a href={sourceLink} target="_blank">
            <button className="live-btn source-btn">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
