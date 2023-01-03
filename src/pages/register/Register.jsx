import { React, useEffect, useState, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";
import { rootAPI } from "../home/Home";

import socialGoogle from "../../resources/icons/icon-google.svg";
import socialFacebook from "../../resources/icons/icon-facebook.svg";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = rootAPI + "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <Navbar />
      {success ? (
        <section>
          <h1>Success!</h1>
          <Link to="/" className="register-form link login">
            <button>
              <span>Go to website</span>
            </button>
          </Link>
        </section>
      ) : (
        <section>
          <div className="register-body">
            <div className="register-wrapper">
              <div className="register-form-header">
                <span>Create Account</span>
                <p> Join as part of bodimaji</p>
              </div>
              <form onSubmit={handleSubmit} className="register-form-input">
                <input
                  type="text"
                  placeholder="Fullname"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                ></input>
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  4 to 24 characters. Must begin with a letter. Letters,
                  numbers, underscores, hyphens allowed.
                </p>
                <input type="text" placeholder="Fullname"></input>
                <input type="text" placeholder="Email Address"></input>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                ></input>
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  8 to 24 characters. Must include uppercase and lowercase
                  letters, a number and a special character. Allowed special
                  characters: <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                ></input>{" "}
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  Must match the first password input field.
                </p>
                <div className="register-form-term">
                  <input type="checkbox" />{" "}
                  <span>I agree to Terms & Conditions</span>
                </div>
                <div className="register-form-button register">
                  <button
                    className="register-form link register"
                    disabled={
                      !validName || !validPwd || !validMatch ? true : false
                    }
                  >
                    <span>Register</span>
                  </button>
                </div>
              </form>
              <div className="register-social-container">
                <div className="register-social-header">or sign up with</div>
                <div className="register-social-button">
                  <img src={socialGoogle} alt="google" />
                  <img src={socialFacebook} alt="facebook" />
                </div>
                <span>Already have an account?</span>
              </div>
              <div className="register-form-button login">
                <Link to="/login" className="register-form link login">
                  <button>
                    <span>Login</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>{" "}
        </section>
      )}
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Register;
