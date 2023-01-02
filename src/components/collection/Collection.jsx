import React from "react";
import "./collection.css";
import { Link } from "react-router-dom";

const CollectionCard = () => {
  return (
    <div className="image5">
      <img
        src={require("../../resources/images/hijau.jpg")}
        alt="blank-collection"
      />
      <div className="cart_title">Everyone Shirt in pearl</div>
      <p className="price">Rp200.000</p>
      <button className="info_button">
        <Link to="/product">View Detail</Link>
      </button>
    </div>
  );
};

export default CollectionCard;
