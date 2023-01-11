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
                src={require("../../resources/images/collection-alt.jpg")}
                alt="founder" style={{float:"right", marginTop:"-200px", marginRight:"-800px"}}
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
            <div className="image-bottom">
             <img
                src={require("../../resources/images/collection-alt.jpg")}
                alt="founder" style={{float:"left" , marginTop:"-200px"}}
              />
              <img
                src={require("../../resources/images/home-alt.jpeg")}
                alt="founder" style={{float:"right", marginTop:"-200px", marginRight:"-750px"}}
              />
              </div>

              <br /> 
              <div className="desc2" style={{marginTop:"30px" , marginBottom:"300px"}}>
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet
            </div>
            <div className="image-bottom-right">
             <img
                src={require("../../resources/images/collection-alt.jpg")}
                alt="founder" style={{float:"left" , marginTop:"-200px", marginLeft:"300px"}}
              />
              <img
                src={require("../../resources/images/home-alt.jpeg")}
                alt="founder" style={{float:"right", marginTop:"-200px", marginRight:"-650px",
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
