import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import { Link } from "react-router-dom";
import axios from "axios";
import { rootAPI } from "../home/Home";

const AllArticle = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const { data } = await axios.get(rootAPI + "/article");
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <Navbar />
      <div className="all-article-body">
        <div className="all-article-header">Article</div>
        <div className="all-article-wrapper">
          {articles.map((article) => (
            <div className="all-article-container" key={article._id}>
              <img
                className="all-article-photo"
                src={require("../../resources/images/article-blank-alt.png")}
                alt="blank-article"
              />
              <div className="all-article-head">
                How to pick the best outfit for yourself?
              </div>
              <div className="all-article-description">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo
              </div>
              <button className="all-article-button">
                <Link to="/article" className="Link">
                  Read More
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default AllArticle;
