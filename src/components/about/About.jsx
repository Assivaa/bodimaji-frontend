import React, { useEffect, useState } from "react";
import "./about.css";

import arrowRight from "../../resources/icons/icon-arrow-right.svg";

const AboutPage = () => {
  return (
    <div className="articles">
        <div className="container">      
        <div className="container-item">
        <div className="rectangle">
        <div className="font">We know how hard it's to find a piece of clothes that comes with a perfect size for your body.
Sometimes it makes you questioning your own. Therefore, <b>BODIMAJI</b> believes that no 'body' should left behind. Through our size-inclusive daily wear clothing that crafted with love and an obsessive attention to detail.</div>
        </div>

        
        <div className="title3">Our Vision</div>
        <div className="desc2">Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet 
        Lorem Ipsum Dolor Sit Amet<br/> Lorem Ipsum Dolor Sit Amet</div>

       <div className="title3">Our Mission</div>
       <div className="desc2">Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet 
        Lorem Ipsum Dolor Sit Amet<br/> Lorem Ipsum Dolor Sit Amet</div>

       <div className="title3">Meet the Founder </div>

       <div className="image">
          <img
            src={require("../../resources/images/founder.jpeg")}
            alt="image"
          />
       </div>

       <div className="title2">Sabrina</div>
       <div className="desc3">Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet<br/>
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet<br/>
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet<br/>
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet<br/>
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet</div>

       <div className="title4">Meet the Team </div>
       <div className="desc4">
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet<br/>
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet<br/>
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
            <img src={arrowRight} alt="image" />
          </button>
       </div>

        </div>
       </div>
    </div>
  );
};

export default AboutPage;
