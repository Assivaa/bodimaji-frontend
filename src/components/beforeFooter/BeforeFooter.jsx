import React from "react";
import "./beforeFooter.css";

const BeforeFooter = () => {
  return (
    <div className="before-footer">
      <div className="features-container">
        <div className="features-list">
          <div className="circle">
          <div className="circleimage">
            <img
              src={require("../../resources/images/baju.png")}
              alt="baju-alt"
            />
          </div>
          </div>
          <div className="features">Size-inclusive</div>
        </div>
        <div className="features-list">
          <div className="circle">
          <div className="circleimage2">
            <img
              src={require("../../resources/images/love.png")}
              alt="love-icon"
            />
          </div>
          </div>
          <div className="features">Made to last</div>
        </div>
        <div className="features-list">
          <div className="circle">
          <div className="circleimage3">
            <img
              src={require("../../resources/images/Package.png")}
              alt="love-icon"
            />
          </div>
          </div>
          <div className="features">Small batches</div>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
