import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "../styles/FooterSection.css";
import React from "react";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Tiruppur, Tamil Nadu
            </h4>
          </div>
          <div className="footer-phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 93603-92933
            </h4>
          </div>
          <div className="footer-email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              kavinmanudheeran@gmail.com
            </h4>
          </div>
        </div>
        <div className="footer-right">
          <h4> About me</h4>
          <p>
            I am a Full Stack developer and curious about deploying innovative
            solutions
          </p>
          <div className="footer-social">
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
