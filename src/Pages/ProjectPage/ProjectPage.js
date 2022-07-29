import React from "react";
import Header from "../../Components/Header/Header";
import img2 from "../../Assets/img2.svg";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import projectDetails from "../../Data/Data";

function ProjectPage() {
  return (
    <>
      <Header img={img2} />
      {projectDetails.map((userProjectDetails, idx) => {
        return (
          <ProjectCard
            key={idx}
            title={userProjectDetails.title}
            discription={userProjectDetails.Disc}
            liveLink={userProjectDetails.LiveLink}
            sourceLink={userProjectDetails.SourceLink}
            date={userProjectDetails.date}
            tech={userProjectDetails.techUsed}
          />
        );
      })}
    </>
  );
}

export default ProjectPage;
