import "../styles/WorkCard.css";
import Image1 from "../assets/Project_Image_First.jpg";
import Image2 from "../assets/Project_Image_Second.jpg";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="workcard-section">
      <h1 className="project-heading"> Projects </h1>
      <div className="project-container">
        <div className="project-card">
          <img src={Image1} alt="FirstImage" />
          <h2 className="project-title"> Project Title</h2>
          <div className="project-description">
            <p> this is description</p>
            <div className="project-buttons">
              <NavLink to="#url.com" className="view-button primary-button">
                View
              </NavLink>
              <NavLink to="#url.com" className="source-button secondary-button">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
