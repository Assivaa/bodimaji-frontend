import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

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
        <div className="menu-item">
          <NavLink to="/" className="LinkNav">
            Home
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/about" className="LinkNav">
            About
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/articles" className="LinkNav">
            Article
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/register" className="LinkNav">
            Register/Login
          </NavLink>
        </div>
        <div>
          <NavLink to="/cart" className="LinkNav">
            <FaShoppingCart /> Cart{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
