import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import "./profile.css";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="articles">
        <div className="containerabout">
          <div className="container-aboutpage">
           

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

           
          </div>
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Profile;
