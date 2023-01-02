import React from "react";
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

const Home = () => {
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
          <DiscoverCollection />
          <DiscoverCollection />
          <DiscoverCollection />
        </div>

        <div className="discover-container">
          <div className="discover-caption">
            <div className="discover-header">Article for you</div>
            <div className="discover-description">Lite size read for you</div>
          </div>
          <div></div>
          <div className="discover-interact">
            <button className="discover-button">
              Read
              <img src={arrowRight} alt="arrow-right" />
            </button>
          </div>
        </div>
        <div className="discover-carousel">
          <DiscoverArticle />
          <DiscoverArticle />
          <DiscoverArticle />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
