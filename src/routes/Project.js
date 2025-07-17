import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import ProjectSection from "../components/HeroSection";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <ProjectSection heading="Projects" text="Some of my most recent works" />
      <WorkCard/>
      <FooterSection />
    </div>
  );
};

export default Project;
