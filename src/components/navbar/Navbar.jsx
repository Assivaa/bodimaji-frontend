import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="logo" style={{ display: "flex" }}>
        BODIMAJI
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div className="menu-item" style={{ display: "flex" }}>
          Home
        </div>
        <div className="menu-item" style={{ display: "flex" }}>
          About
        </div>
        <div className="menu-item" style={{ display: "flex" }}>
          Article
        </div>
        <div className="menu-item" style={{ display: "flex" }}>
          Register/Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;
