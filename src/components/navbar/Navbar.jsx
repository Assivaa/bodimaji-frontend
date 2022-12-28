import React, { useEffect, useState } from "react";
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
        <div className="menu-item">Home</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Article</div>
        <div className="menu-item">Register/Login</div>
      </div>
    </div>
  );
};

export default Navbar;
