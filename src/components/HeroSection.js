import "../styles/HeroSection.css";

import React, { Component } from "react";

class ProjectSection extends Component {
  render() {
    return (
      <div className="project-section">
        <div className="project-heading">
          <h1> {this.props.heading}</h1>
          <p> {this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default ProjectSection;
