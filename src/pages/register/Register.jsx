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
        <div className="registers-registers">
          <div className="registers-container">
            <div className="registers-createaccount">
              Create Account
              <div className="registers-xxxaspartofbodimaji ">
                xxxx as part of bodimaji
                <div className="registers-Rectangle1">
                  <input type="text"></input>
                </div>
                <div className="registers-Rectangle1">
                  <input type="text" placeholder="Fullname"></input>
                </div>
                <div className="registers-Rectangle1">
                  <input type="text" placeholder="Email Address"></input>
                </div>
                <div className="registers-Rectangle1">
                  <input type="password" placeholder="Password"></input>
                </div>
                <div>Minimum 8 characters</div>
                <div className="registers-Rectangle1">
                  <input type="password" placeholder="Confirm Password"></input>
                </div>
                <div className="registers-term">
                  <input type="checkbox" /> I agree to Terms & Conditions
                </div>
                <div>
                  <button className="registers-Rectangle2">
                    <div className="registers-Register">Register</div>
                  </button>
                </div>
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
