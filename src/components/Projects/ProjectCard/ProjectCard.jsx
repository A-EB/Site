import React from "react";
import './ProjectCard.css';

const ProjectCard = ({details}) => {
    return (
        <div className="project-card">
            <h6>{details.title}</h6>

            <div className="project-duration">{details.date}</div>

            <p className="project-description">{details.description}</p>
        </div>
    )
}

export default ProjectCard