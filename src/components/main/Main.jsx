import React, { useEffect, useState } from "react";
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
            Explore
            <img src={arrowRight} alt="image" />
          </button>
        </div>
        <div className="container-item">
          <img
            src={require("../../resources/images/home-alt.jpeg")}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
