import React from "react";
import "./style.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
function ProjectCard({ title, link, children }) {
  return (
    <div className="card ml-3">
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
