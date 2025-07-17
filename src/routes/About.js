import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        heading="About me..!"
        text="I am Junior Full stack developer"
      />
      <FooterSection />
    </div>
  );
};

export default About;
