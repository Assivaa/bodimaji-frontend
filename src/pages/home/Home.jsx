import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import arrowRight from "../../resources/icons/icon-arrow-right.svg";

import axios from "axios";
import "./home.css";

const rootAPI = "http://localhost:3001";

const Home = () => {
  const [latestArticles, setLatestArticles] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  const fetchLatestArticles = async () => {
    const { data } = await axios.get(rootAPI + "/article/latest");
    setLatestArticles(data);
  };

  const fetchLatestProducts = async () => {
    const { data } = await axios.get(rootAPI + "/product/latest");
    setLatestProducts(data);
  };

  useEffect(() => {
    fetchLatestArticles();
    fetchLatestProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="container">
          <div className="container-item">
            <div className="header">Made for all bodies</div>
            <div className="description">
              Size-inclusive fashion is a human right
            </div>
            <button className="button-explore">
              <Link to="/product" className="Link">
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
      <BeforeFooter />
      <div className="discover">
        <div className="discover-container">
          <div className="discover-caption">
            <div className="discover-header">Discover our product</div>
            <div className="discover-description">
              Our latest product, curated for you
            </div>
          </div>
          <div></div>
          <div className="discover-interact">
            <button className="discover-button">
              <Link to="/product" className="Link">
                See All
              </Link>
              <img src={arrowRight} alt="article-alt" />
            </button>
          </div>
        </div>
        <div className="discover-carousel">
          {latestProducts.map((product) => (
            <Link
              to={`/product/${product._id}`}
              className="carousel-image"
              key={product._id}
            >
              <img src={product.img} alt="article-alt" />
            </Link>
          ))}
        </div>

        <div className="discover-container">
          <div className="discover-caption">
            <div className="discover-header">Article for you</div>
            <div className="discover-description">Lite size read for you</div>
          </div>
          <div></div>
          <div className="discover-interact">
            <button className="discover-button">
              <Link to="/article" className="Link">
                Read
              </Link>
              <img src={arrowRight} alt="arrow-right" />
            </button>
          </div>
        </div>
        <div className="discover-carousel">
          {latestArticles.map((article) => (
            <Link
              to={`/article/${article._id}`}
              className="carousel-image"
              key={article._id}
            >
              <img src={article.img} alt="article-alt" />
              <div className="discover-article">
                <div className="article-header">{article.title}</div>
                <div className="article-content">{article.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Home, rootAPI };
