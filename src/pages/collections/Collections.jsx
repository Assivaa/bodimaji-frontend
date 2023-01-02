import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import "./collections.css";

const Collection = () => {
  return (
    <>
      <Navbar />
      <div className="collection-body">
        <div className="title">Explore Collection</div>
        <div className="collection-wrapper">
          <div className="image5">
            <img
              src={require("../../resources/images/hijau.jpg")}
              alt="blank-collection"
            />
            <div className="cart_title">Everyone Shirt in pearl</div>
            <p className="price">Rp200.000</p>
            <button className="info_button">
              <Link to="/collection/:id">View Detail</Link>
            </button>
          </div>
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Collection;
