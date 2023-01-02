import React from "react";
import { Link } from "react-router-dom";
import "./discover.css";

const DiscoverCollection = ({ collection }) => {
  return (
    <Link to={`/collection/${collection._id}`} className="carousel-image">
      <img src={collection.imageUrl} alt="article-alt" />
    </Link>
  );
};

const DiscoverArticle = ({ article }) => {
  return (
    <Link to={`/article/${article._id}`} className="carousel-image">
      <img src={article.imageUrl} alt="article-alt" />
      <div className="discover-article">
        <div className="article-header">{article.title}</div>
        <div className="article-content">{article.description}</div>
      </div>
    </Link>
  );
};

export { DiscoverCollection, DiscoverArticle };
