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

              <img
                src={require("../../resources/images/vision.jpg")}
                alt="founder" style={{float:"right", paddingTop:"5px", marginTop:"-140px",marginRight:"-600px", paddingLeft:"80px"}}
              />
  

            <div className="title3">Our Mission</div>
            <div className="desc2" style={{marginBottom:"300px"}}>
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
              <br /> Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
              <br /> Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
            </div>
           
            <br /> 
            <div className="image-bottom d-flex inline">
             <img
                src={require("../../resources/images/about_1.jpg")}
                alt="founder" style={{ marginTop:"-250px"}}
              />
              <img
                src={require("../../resources/images/about_2.jpg")}
                alt="founder" style={{marginTop:"-250px", paddingLeft:"30px"}}
              />
              </div>

              <br /> 
              <div className="desc2" style={{marginTop:"30px" , marginBottom:"300px"}}>
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
            </div>
            <div className="image-bottom-right  d-flex inline">
             <img
                src={require("../../resources/images/about_4.jpg")}
                alt="founder" style={{marginTop:"-200px", marginLeft:"300px"}}
              />
              <img
                src={require("../../resources/images/about_3.jpg")}
                alt="founder" style={{ marginTop:"-200px",paddingLeft:"30px",
                 marginBottom:"50px"}}
              />
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
