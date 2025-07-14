import "../styles/HomeSection.css";
import IntroImage from "../assets/introImage.png";
import React from "react";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="mask-image">
        <img className="intro-image" src={IntroImage} alt="Intro Image"></img>
      </div>
      <div className="home-content">
        <p> Hi, I am Kavin..! </p>
        <h1> Full Stack Developer </h1>
        <div>
          <Link to="/project" className="primary-button">
            {" "}
            Projects{" "}
          </Link>
          <Link to="/contact" className="secondary-button">
            {" "}
            Contact{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
