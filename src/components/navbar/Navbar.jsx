import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="logo">
        <img
          src={require("../../resources/icons/bodimaji-logo.png")}
          alt="image"
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
        <div className="menu-item"><NavLink to='/'>Home</NavLink></div>
        <div className="menu-item"><NavLink to='/about'>About</NavLink></div>
        <div className="menu-item"><NavLink to='/article'>Article</NavLink></div>
        <div className="menu-item"><NavLink to='/register'>Register/Login</NavLink></div>
      </div>
    </div>
  );
};

export default Navbar;
