import React, { useEffect, useState } from "react";
import "./discover.css";

const DiscoverCollection = () => {
  return (
    <div className="carousel-image">
      <img
        src={require("../../resources/images/collection-alt.jpg")}
        alt="article-alt"
      />
    </div>
  );
};

const DiscoverArticle = () => {
  return (
    <div className="carousel-image">
      <img
        src={require("../../resources/images/article-alt.jpeg")}
        alt="article-alt"
      />
      <div className="discover-article">
        <div className="article-header">Tips Pemula</div>
        <div className="article-content">Apa itu Size-Inclusive fashion?</div>
      </div>
    </div>
  );
};

export { DiscoverCollection, DiscoverArticle };
