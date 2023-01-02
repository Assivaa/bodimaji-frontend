import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { rootAPI } from "../home/Home";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import "./collections.css";

const Collection = () => {
  const [collections, setCollections] = useState([]);

  const fetchCollections = async () => {
    const { data } = await axios.get(rootAPI + "/collection");
    setCollections(data);
  };

  useEffect(() => {
    fetchCollections();
  }, []);
  return (
    <>
      <Navbar />
      <div className="collection-body">
        <div className="title">Explore Collection</div>
        <div className="collection-wrapper">
          {collections.map((collection) => (
            <div className="image5">
              <img src={collection.imageUrl} alt="blank-collection" />
              <div className="cart_title">{collection.name}</div>
              <p className="price">Rp{collection.price}</p>
              <button className="info_button">
                <Link to={`/collection/${collection._id}`}>View Detail</Link>
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

export default Collection;
