import React, { useEffect, useState } from "react";
import "./articlesCard.css";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="all-article-container">
      <img
        className="all-article-photo"
        src={require("../../resources/images/article-blank-alt.png")}
        alt="image"
      />
      <div className="all-article-head">
        How to pick the best outfit for yourself?
      </div>
      <div className="all-article-description">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo
      </div>
      <button className="all-article-button">
        <Link to="/article" className="Link">
          Read More
        </Link>
      </button>
    </div>
  );
};

export default Articles;
