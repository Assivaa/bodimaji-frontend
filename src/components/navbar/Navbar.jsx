import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import "./navbar.css";
import iconClose from "../../resources/icons/icon-close.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
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
        <div className="menu-item">
          <Link to="/register" className="LinkNav">
            Register/Login
          </Link>
        </div>
        <div className="menu-item" onClick={handleClick}>
          <FaShoppingCart /> Cart{" "}
        </div>
      </div>
      <div
        id="mySidenav"
        className="sidenav"
        style={{
          width: isActive ? "455px" : "0",
        }}
      >
        <div className="menu-cart-wrapper">
          <img
            src={iconClose}
            alt="icon-close"
            className="menu-cart-close"
            onClick={handleClick}
          />
          <div className="menu-cart-title">Cart</div>
          <div className="menu-cart-remove">Remove</div>
          <div className="menu-cart-container">
            <div className="menu-cart-name">Everyone Shirt in Pearl</div>
            <div className="menu-cart-color">Beige</div>
            <div className="menu-cart-quantity">
              <div className="menu-cart-price">Rp214.000</div>
              <div className="menu-cart-input">
                <input type="number" min="1" />
              </div>
            </div>
          </div>
          <div className="menu-cart-subtotal">
            <div className="menu-cart-subtotal-title">Subtotal:</div>
            <div className="menu-cart-price">Rp214.000</div>
          </div>
          <div className="menu-cart-checkout">
            <Link to="/cart">
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
