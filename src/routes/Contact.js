import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSection heading="Contact" text="Let's have a chat" />
      <FooterSection />
    </div>
  );
};

export default Contact;
