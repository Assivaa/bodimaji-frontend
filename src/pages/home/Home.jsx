import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import {
  DiscoverArticle,
  DiscoverCollection,
} from "../../components/discover/Discover";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import arrowRight from "../../resources/icons/icon-arrow-right.svg";

import axios from "axios";

const rootAPI = "http://localhost:3001";

const Home = () => {
  const [latestArticles, setLatestArticles] = useState([]);
  const [latestCollections, setLatestCollections] = useState([]);

  const fetchLatestArticles = async () => {
    const { data } = await axios.get(rootAPI + "/article/latest");
    setLatestArticles(data);
  };

  const fetchLatestCollections = async () => {
    const { data } = await axios.get(rootAPI + "/collection/latest");
    setLatestCollections(data);
  };

  useEffect(() => {
    fetchLatestArticles();
    fetchLatestCollections();
  }, []);

  return (
    <>
      <Navbar />
      <Main />
      <BeforeFooter />
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
            <button className="discover-button">
              <Link to="/collection" className="Link">
                See All
              </Link>
              <img src={arrowRight} alt="article-alt" />
            </button>
          </div>
        </div>
        <div className="discover-carousel">
          {latestCollections.map((collection) => (
            <DiscoverCollection collection={collection} key={collection._id} />
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
              <Link to="/articles" className="Link">
                Read
              </Link>
              <img src={arrowRight} alt="arrow-right" />
            </button>
          </div>
        </div>
        <div className="discover-carousel">
          {latestArticles.map((article) => (
            <DiscoverArticle article={article} key={article._id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Home, rootAPI };
