import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import arrowAbout from "../../resources/icons/icon-arrow-right.svg";

import "./about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="articles">
        <div className="containerabout">
          <div className="container-aboutpage">
            <div className="rectangle">
              <div className="font">
                We know how hard it's to find a piece of clothes that comes with
                a perfect size for your body. Sometimes it makes you questioning
                your own. Therefore, <b>BODIMAJI</b> believes that no 'body'
                should left behind. Through our size-inclusive daily wear
                clothing that crafted with love and an obsessive attention to
                detail.
              </div>
            </div>

            <div className="title3">Our Vision</div>
            <div className="desc2">
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
              <br /> Lorem Ipsum Dolor Sit Amet
            </div>

            <div className="title3">Our Mission</div>
            <div className="desc2">
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
              <br /> Lorem Ipsum Dolor Sit Amet
            </div>

            <div className="title3">Meet the Founder </div>

            <div className="image">
              <img
                src={require("../../resources/images/founder.jpeg")}
                alt="founder"
              />
            </div>

            <div className="title2">Sabrina</div>
            <div className="desc3">
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
              <br />
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
              <br />
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
              <br />
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
              <br />
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
            </div>

            <div className="title4">Meet the Team </div>
            <div className="desc4">
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
              <br />
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
              <br />
            </div>

            <div className="banner">
              <img
                src={require("../../resources/images/banner.jpeg")}
                alt="banner"
              />
            </div>

            <div className="join-interact">
              <button className="join-button">
                Join Us
                <img src={arrowAbout} alt="join" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default About;
