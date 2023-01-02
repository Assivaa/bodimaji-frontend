import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

import arrowRight from "../../resources/icons/icon-arrow-right.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="container-item">
          <div className="header">Made for all bodies</div>
          <div className="description">
            Size-inclusive fashion is a human right
          </div>
          <button className="button-explore">
            <Link to="/collection" className="Link">
              Explore
            </Link>
            <img src={arrowRight} alt="arrow-right" />
          </button>
        </div>
        <div className="container-item">
          <img
            src={require("../../resources/images/home-alt.jpeg")}
            alt="home-alt"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
