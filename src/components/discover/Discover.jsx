import React, { useEffect, useState } from "react";
import "./discover.css";

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover-container">
        <div className="discover-caption">
          <div className="discover-header">Discover our collection</div>
          <div className="discover-description">
            Our latest collection, curated for you
          </div>
        </div>
        <div></div>
        <div className="discover-interact">
          <button className="discover-button">See All</button>
        </div>
      </div>
      <div className="discover-carousel">
        <div className="carousel-image">
          <img src="../../images/collection-placeholder.jpg" alt="image" />
          <a>BUY</a>
        </div>
        <div className="carousel-image">
          <img src="" alt="image" />
          <a>BUY</a>
        </div>
        <div className="carousel-image">
          <img src="" alt="image" />
          <a>BUY</a>
        </div>
      </div>

      <div className="discover-container">
        <div className="discover-caption">
          <div className="discover-header">Discover our collection</div>
          <div className="discover-description">
            Our latest collection, curated for you
          </div>
        </div>
        <div></div>
        <div className="discover-interact">
          <button className="discover-button">See All</button>
        </div>
      </div>
      <div className="discover-carousel">
        <div className="carousel-image">
          <img src="" alt="image" />
          <a>BUY</a>
        </div>
        <div className="carousel-image">
          <img src="" alt="image" />
          <a>BUY</a>
        </div>
        <div className="carousel-image">
          <img src="" alt="image" />
          <a>BUY</a>
        </div>
      </div>
    </div>
  );
};

export default Discover;
