import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import "./collection.css";

const Collection = () => {
  return (
    <>
      <Navbar />
      <div className="productscreen">
        <div className="product">
          <div className="buy">
            <img
              src={require("../../resources/images/hijau.jpg")}
              alt="blank-collection"
            />
            <div className="buy_title">Everyone Shirt in pearl</div>
          </div>

          <div className="left_info">
            <p className="left_name">Product 1</p>
            <p> Price: Rp200.000</p>
            <p>
              {" "}
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quidem quo quisquam similique doloremque laborum illum
              sapiente deleniti quaerat quia praesentium architecto ullam quos
              repellat aliquam minus quas, deserunt blanditiis.
            </p>
          </div>

          <div className="productscreen_right">
            <div className="right_info">
              <p>
                Price: <span>Rp200.000</span>
              </p>
              <p>
                Status: <span>In Stock </span>
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
                <button>Add to cart</button>
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
