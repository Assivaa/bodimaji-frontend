import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import "./product.css";

import { rootAPI } from "../home/Home";

const Product = () => {
  const path = useLocation().pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(rootAPI + "/product/" + path);
      setProduct(data);
    };
    getProduct();
  }, [path]);

  return (
    <>
      <Navbar />
      <div className="productListcreen">
        <div className="product">
          <div className="buy">
            <img src={product.img} alt="blank-product" />
            <div className="buy_title">{product.name}</div>
          </div>

          <div className="left_info">
            <p className="left_name">{product.name}</p>
            <p> Price: Rp{product.price}</p>
            <p>{product.description}</p>
          </div>

          <div className="productListcreen_right">
            <div className="right_info">
              <p>
                Price: <span>Rp{product.price}</span>
              </p>
              <p>
                Status:
                {product.countInStock > 0 ? (
                  <span> In Stock ({product.countInStock}) </span>
                ) : (
                  <span> Out of Stock </span>
                )}
              </p>
              <p>
                Qty:
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p>
              <p>
                Color:
                <select>
                  <option value="red">red</option>
                  <option value="blue">blue</option>
                  <option value="sage">sage</option>
                  <option value="yellow">yellow</option>
                </select>
              </p>
              <p>
                {product.countInStock > 0 ? (
                  <button className="product-button-active">Add to cart</button>
                ) : (
                  <button className="product-button-disabled" disabled>
                    Add to cart
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Product;
