import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import "./collection.css";

import { rootAPI } from "../home/Home";

const Collection = () => {
  const path = useLocation().pathname.split("/")[2];
  const [collection, setCollection] = useState({});

  useEffect(() => {
    const getCollection = async () => {
      const { data } = await axios.get(rootAPI + "/collection/" + path);
      setCollection(data);
    };
    getCollection();
  }, [path]);

  return (
    <>
      <Navbar />
      <div className="productscreen">
        <div className="product">
          <div className="buy">
            <img src={collection.imageUrl} alt="blank-collection" />
            <div className="buy_title">{collection.name}</div>
          </div>

          <div className="left_info">
            <p className="left_name">{collection.name}</p>
            <p> Price: Rp{collection.price}</p>
            <p>{collection.description}</p>
          </div>

          <div className="productscreen_right">
            <div className="right_info">
              <p>
                Price: <span>Rp{collection.price}</span>
              </p>
              <p>
                Status:
                {collection.countInStock > 0 ? (
                  <span> In Stock ({collection.countInStock}) </span>
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
                {collection.countInStock > 0 ? (
                  <button className="collection-button-active">
                    Add to cart
                  </button>
                ) : (
                  <button className="collection-button-disabled" disabled>
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

export default Collection;
