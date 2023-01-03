import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";
import "./register.css";

import socialGoogle from "../../resources/icons/icon-google.svg";
import socialFacebook from "../../resources/icons/icon-facebook.svg";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="register-body">
        <div className="register-wrapper">
          <div className="register-form-header">
            <span>Create Account</span>
            <p> Join as part of bodimaji</p>
          </div>
          <div className="register-form-input">
            <input type="text" placeholder="Fullname"></input>
            <input type="text" placeholder="Email Address"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Confirm Password"></input>
          </div>
          <div className="register-form-term">
            <input type="checkbox" /> <span>I agree to Terms & Conditions</span>
          </div>
          <div className="register-form-button">
            <button className="register-button">
              <span>Register</span>
            </button>
          </div>
          <div className="register-social-container">
            <div className="register-social-header">or sign up with</div>
            <div className="register-social-button">
              <img src={socialGoogle} alt="google" />
              <img src={socialFacebook} alt="facebook" />
            </div>
            <span>Already have an account?</span>
          </div>
          <div className="register-form-button">
            <button className="login-button">
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Register;
