import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { logout } from "../../redux/userSlice";

import "./admin.css";
import iconClose from "../../resources/icons/icon-close.svg";

const NavbarAdmin = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
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
            {/* Home */}
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/about" className="LinkNav">
            {/* About */}
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/article" className="LinkNav">
            {/* Article */}
          </Link>
        </div>

        {currentUser ? (
          <>
            <div className="menu-item">
              <Link to={`/profile`} className="LinkNav">
               {/* My Profile */}
              </Link>
            </div>
                       
          </>
        ) : (
          <div className="menu-item">
            <Link to="/register" className="LinkNav">
              {/* Register */}
            </Link>
          </div>
        )}
      
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

export default NavbarAdmin;
