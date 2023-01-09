import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { logout } from "../../redux/userSlice";

import "./navbar.css";
import iconClose from "../../resources/icons/icon-close.svg";
import Slider from "../Slider";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div
      className="navbar"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="logo">
        <img
          src={require("../../resources/icons/bodimaji-logo.png")}
          alt="logo"
        />
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div className="menu-item">
          <Link to="/" className="LinkNav">
            Home
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/about" className="LinkNav">
            About
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/article" className="LinkNav">
            Article
          </Link>
        </div>
        {currentUser && currentUser.role === "admin" ? (
          <div className="menu-item">
            <Link to="/dashboard" className="LinkNav" target="_blank">
              Dashboard
            </Link>
          </div>
        ) : (
          <></>
        )}
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Navbar;
