import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { rootAPI } from "../home/Home";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import "./productList.css";

const Product = () => {
  const [productList, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get(rootAPI + "/product");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="product-body">
        <div className="title">Explore Product</div>
        <div className="product-wrapper">
          {productList.map((product) => (
            <div className="image5">
              <img src={product.img} alt="blank-product" />
              <div className="cart_title">{product.name}</div>
              <p className="price">Rp{product.price}</p>
              <button className="info_button">
                <Link to={`/product/${product._id}`}>View Detail</Link>
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

export default Product;
