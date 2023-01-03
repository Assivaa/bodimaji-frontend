import { React, useEffect, useState, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";
import { rootAPI } from "../home/Home";

import socialGoogle from "../../resources/icons/icon-google.svg";
import socialFacebook from "../../resources/icons/icon-facebook.svg";

const REGISTER_URL = rootAPI + "/register";
const Register = () => {
  const usernameRef = useRef();
  const fullnameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [fullname, setFullname] = useState("");
  const [validFullName, setValidFullName] = useState(false);
  const [fullnameFocus, setFullnameFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(username);
    setValidFullName(fullname);
    setValidEmail(email);
  }, [username, fullname, email]);

  useEffect(() => {
    setValidPassword(password);
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, fullname, email, password, matchPassword]);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(rootAPI + "/register", {
        fullname,
        email,
        username,
        password,
      });
      navigate("/login");
    } catch (error) {
      navigate("/login");
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
                  placeholder="Username"
                  id="username"
                  ref={usernameRef}
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUsernameFocus(true)}
                ></input>
                <p
                  id="uidnote"
                  className={
                    usernameFocus && username && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  4 to 24 characters. Must begin with a letter. Letters,
                  numbers, underscores, hyphens allowed.
                </p>
                <input
                  type="text"
                  placeholder="Fullname"
                  ref={fullnameRef}
                  autoComplete="off"
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                  required
                ></input>
                <input
                  type="text"
                  placeholder="Email Address"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                ></input>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="passwordnote"
                  onFocus={() => setPasswordFocus(true)}
                ></input>
                <p
                  id="passwordnote"
                  className={
                    passwordFocus && !validPassword
                      ? "instructions"
                      : "offscreen"
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
                  id="confirm_password"
                  onChange={(e) => setMatchPassword(e.target.value)}
                  value={matchPassword}
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
                      !validName || !validPassword || !validMatch ? true : false
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
