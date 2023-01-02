import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";
import "./login.css";

const Register = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="logins-logins">
          <div className="logins-container">
            <div className="logins-login">
              Login
                <div className="logins-Rectangle1">
                  <input type="text" placeholder="Email Address"></input>
                </div>
                <div className="logins-Rectangle1">
                  <input type="password" placeholder="Password"></input>
                </div>
            </div>
          </div>
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Register;