import { React, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import axios from "axios";
import "./login.css";
import Form from 'react-bootstrap/Form';
import { rootAPI } from "../home/Home";
import socialGoogle from "../../resources/icons/icon-google.svg";
import socialFacebook from "../../resources/icons/icon-facebook.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(loginStart());
    try {
      const { data } = await axios.post(rootAPI + "/login", {
        username,
        password,
      });
      dispatch(loginSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(loginFailure());
    }
  };
  return (
    <>
      <Navbar />
      <div className="login-body">
        <div className="login-wrapper">
          <div className="login-form-header">
            <span>Login</span>
          </div>
          <div className="login-form">
          <form>
            <div className="login-form-input">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-form-button login">
              <a className="login-form link login">
                <button onClick={handleLogin}>
                  <span>Login</span>
                </button>
              </a>
            </div>
          </form>
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
