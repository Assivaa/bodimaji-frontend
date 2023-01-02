import React from "react";
import "./footer.css";

import iconMail from "../../resources/icons/icon-mail.svg";
import iconWhatsapp from "../../resources/icons/icon-whatsapp.svg";
import iconInstagram from "../../resources/icons/icon-instagram.svg";
import iconTiktok from "../../resources/icons/icon-tiktok.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img
          src={require("../../resources/icons/bodimaji-logogram.png")}
          alt="logogram"
        />
      </div>
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-header">Find Us Here</div>
          <div className="footer-menu social">
            <div className="footer-icon">
              <img src={iconMail} alt="mail" />
            </div>
            <div className="footer-icon">
              <img src={iconWhatsapp} alt="whatsapp" />
            </div>
            <div className="footer-icon">
              <img src={iconInstagram} alt="instagram" />
            </div>
            <div className="footer-icon">
              <img src={iconTiktok} alt="tiktok" />
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-header">Address</div>
          <div className="footer-menu">
            <div className="footer-item address">
              Jln. Lorem Ipsum Dolor Sit Amet
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-header">Company</div>
          <div className="footer-menu">
            <div className="footer-item">Who We Are</div>
            <div className="footer-item">Careers</div>
            <div className="footer-item">FAQ</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
