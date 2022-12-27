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
          <img
            src={require("../../resources/images/collection-alt.jpg")}
            alt="image"
          />
          <a>BUY</a>
        </div>
        <div className="carousel-image">
          <img
            src={require("../../resources/images/collection-alt.jpg")}
            alt="image"
          />
          <a>BUY</a>
        </div>
        <div className="carousel-image">
          <img
            src={require("../../resources/images/collection-alt.jpg")}
            alt="image"
          />
          <a>BUY</a>
        </div>
      </div>

      <div className="discover-container">
        <div className="discover-caption">
          <div className="discover-header">Article for you</div>
          <div className="discover-description">Lite size read for you</div>
        </div>
        <div></div>
        <div className="discover-interact">
          <button className="discover-button">See All</button>
        </div>
      </div>
      <div className="discover-carousel">
        <div className="carousel-image">
          <img
            src={require("../../resources/images/article-alt.jpeg")}
            alt="image"
          />
          <div className="discover-article">
            <div className="article-header">Tips Pemula</div>
            <div className="article-content">
              Apa itu Size-Inclusive fashion?
            </div>
          </div>
        </div>
        <div className="carousel-image">
          <img
            src={require("../../resources/images/article-alt.jpeg")}
            alt="image"
          />
          <div className="discover-article">
            <div className="article-header">Tips Pemula</div>
            <div className="article-content">
              Apa itu Size-Inclusive fashion?
            </div>
          </div>
        </div>
        <div className="carousel-image">
          <img
            src={require("../../resources/images/article-alt.jpeg")}
            alt="image"
          />
          <div className="discover-article">
            <div className="article-header">Tips Pemula</div>
            <div className="article-content">
              Apa itu Size-Inclusive fashion?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
