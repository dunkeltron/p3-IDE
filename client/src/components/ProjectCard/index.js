import React from "react";
import "./style.css";

function ProjectCard({ title, link, }) {
  return (
    <div className="card ml-5 mt-3 mb-5 projectCard">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Some quick example text</p>
        <a href={link} className="btn btn-info">
          Link to Project Editor
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
