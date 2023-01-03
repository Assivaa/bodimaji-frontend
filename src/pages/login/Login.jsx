import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./login.css";

import socialGoogle from "../../resources/icons/icon-google.svg";
import socialFacebook from "../../resources/icons/icon-facebook.svg";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-body">
        <div className="login-wrapper">
          <div className="login-form-header">
            <span>Login</span>
          </div>
          <div className="login-form-input">
            <input type="text" placeholder="Email Address"></input>
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="login-form-button login">
            <Link to="/" className="login-form link login">
              <button>
                <span>Login</span>
              </button>
            </Link>
          </div>
          <div className="login-form-term">
            <span>Forgot Password?</span>
          </div>
          <div className="login-social-container">
            <div className="login-social-header">or log in with</div>
            <div className="login-social-button">
              <img src={socialGoogle} alt="google" />
              <img src={socialFacebook} alt="facebook" />
            </div>
          </div>
          <div className="login-form-button register">
            <Link to="/register" className="login-form link register">
              <button>
                <span>Register</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Login;
