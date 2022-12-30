import React, { useEffect, useState } from "react";
import "./product.css";

const Product = () => {
  return (
    <div className="product">
     <div className="buy">
          <img
            src={require("../../resources/images/hijau.jpg")}
            alt="image"
          />
          <div className="buy_title">Everyone Shirt in pearl</div>
       </div>


    </div>
  );
};

export default Product;
