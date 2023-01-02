import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import "./article.css";

import { rootAPI } from "../home/Home";

import iconProfile from "../../resources/icons/icon-profile.svg";
import iconBookmark from "../../resources/icons/icon-bookmark.svg";
import iconLike from "../../resources/icons/icon-like.svg";

const Article = () => {
  const path = useLocation().pathname.split("/")[2];
  const [article, setArticle] = useState({});

  useEffect(() => {
    const getArticle = async () => {
      const { data } = await axios.get(rootAPI + "/article/" + path);
      setArticle(data);
    };
    getArticle();
  }, [path]);
  return (
    <>
      <Navbar />
      <div className="article">
        <div className="article-header">
          <div className="article-header-title">{article.title}</div>
          <img
            src={require("../../resources/images/article-alt.jpeg")}
            alt="article"
          />
          <div className="article-category">{article.author}</div>
        </div>
        <div className="article-content">
          <div className="article-title">{article.title}</div>
          <div className="article-description">{article.description}</div>
        </div>
        <div className="article-container">
          <div className="article-related">
            <div className="post">
              <img
                src={require("../../resources/images/article-related-alt.png")}
                alt="related"
              />
              <div className="article-related-header">
                <img
                  className="icon-profile"
                  src={iconProfile}
                  alt="icon-profile"
                />
                <div className="article-related-head">
                  <div className="article-related-author">Diana Silver</div>
                  <div className="article-related-time">4 Mins Read</div>
                </div>
                <img
                  className="icon-bookmark"
                  src={iconBookmark}
                  alt="icon-bookmark"
                />
              </div>

              <div className="article-related-content">
                <div className="article-related-title">
                  Unlocking Fashion, Circular Economy, and Sustainability
                </div>
                <div className="article-related-description">
                  We have been very aware fashion has been causing harmful
                  environmental and social impacts since a long time ago. The
                  fashion industry always promises We have been very aware
                  fashion has been causing harmful environmental and social
                  impacts since a long time ago. The fashion industry always
                  promises We have been very aware fashion has been causing
                  harmful environmental and social impacts since a long time
                  ago. The fashion industry always promises... We have been very
                  aware fashion has been causing harmful environmental and
                  social impacts since a long time ago. The fashion industry
                  always promises We have been very aware fashion has been
                  causing harmful environmental and social impacts since a long
                  time ago. The fashion industry always promises We have been
                  very aware fashion has been causing harmful environmental and
                  social impacts since a long time ago. The fashion industry
                  always promises We have been very aware fashion has been
                  causing harmful environmental and social impacts since a long
                  time ago. The fashion industry always promises... We have been
                  very aware fashion has been causing harmful environmental and
                  social impacts since a long time ago. The fashion industry
                  always promises We have been very aware fashion has been
                  causing harmful environmental and social impacts since a long
                  time ago. The fashion industry always promises We have been
                  very aware fashion has been causing harmful environmental and
                  social impacts since a long time ago. The fashion industry
                  always promises We have been very aware fashion has been
                  causing harmful environmental and social impacts since a long
                  time ago. The fashion industry always promises... We have been
                  very aware fashion has been causing harmful environmental and
                  social impacts since a long time ago. The fashion industry
                  always promises
                </div>
              </div>

              <div className="article-related-footer">
                <div className="article-related-views">
                  <div className="article-related-author">80 Views</div>
                </div>
                <div className="article-related-author">42</div>
                <img className="icon-like" src={iconLike} alt="icon-like" />
              </div>
            </div>

            <div className="post">
              <img
                src={require("../../resources/images/article-related-alt.png")}
                alt="related"
              />
              <div className="article-related-header">
                <img
                  className="icon-profile"
                  src={iconProfile}
                  alt="icon-profile"
                />
                <div className="article-related-head">
                  <div className="article-related-author">Diana Silver</div>
                  <div className="article-related-time">4 Mins Read</div>
                </div>
                <img
                  className="icon-bookmark"
                  src={iconBookmark}
                  alt="icon-bookmark"
                />
              </div>

              <div className="article-related-content">
                <div className="article-related-title">
                  Unlocking Fashion, Circular Economy, and Sustainability
                </div>
                <div className="article-related-description">
                  We have been very aware fashion has been causing harmful
                  environmental and social impacts since a long time ago. The
                  fashion industry always promises We have been very aware
                  fashion has been causing harmful environmental and social
                  impacts since a long time ago. The fashion industry always
                  promises We have been very aware fashion has been causing
                  harmful environmental and social impacts since a long time
                  ago. The fashion industry always promises... We have been very
                  aware fashion has been causing harmful environmental and
                  social impacts since a long time ago. The fashion industry
                  always promises We have been very aware fashion has been
                  causing harmful environmental and social impacts since a long
                  time ago. The fashion industry always promises We have been
                  very aware fashion has been causing harmful environmental and
                  social impacts since a long time ago. The fashion industry
                  always promises We have been very aware fashion has been
                  causing harmful environmental and social impacts since a long
                  time ago. The fashion industry always promises... We have been
                  very aware fashion has been causing harmful environmental and
                  social impacts since a long time ago. The fashion industry
                  always promises We have been very aware fashion has been
                  causing harmful environmental and social impacts since a long
                  time ago. The fashion industry always promises We have been
                  very aware fashion has been causing harmful environmental and
                  social impacts since a long time ago. The fashion industry
                  always promises We have been very aware fashion has been
                  causing harmful environmental and social impacts since a long
                  time ago. The fashion industry always promises... We have been
                  very aware fashion has been causing harmful environmental and
                  social impacts since a long time ago. The fashion industry
                  always promises
                </div>
              </div>

              <div className="article-related-footer">
                <div className="article-related-views">
                  <div className="article-related-author">80 Views</div>
                </div>
                <div className="article-related-author">42</div>
                <img className="icon-like" src={iconLike} alt="icon-like" />
              </div>
            </div>
          </div>
          <div className="article-related-list">
            <div className="related-list-container">
              <div className="related-list-category">Tips Pemula</div>
              <div className="related-list-title">
                Apa Itu Size-Inclusive Clothes?
              </div>
            </div>
            <div className="related-list-container">
              <div className="related-list-category">Eco Fashion Tips</div>
              <div className="related-list-title">
                Langkah Awal Ethical fashion untuk Pemula
              </div>
            </div>
            <div className="related-list-container">
              <div className="related-list-category">Tips Pemula</div>
              <div className="related-list-title">
                Apa Itu Size-Inclusive Clothes?
              </div>
            </div>
            <div className="related-list-container">
              <div className="related-list-category">Eco Fashion Tips</div>
              <div className="related-list-title">
                Langkah Awal Ethical fashion untuk Pemula
              </div>
            </div>
          </div>
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Article;
