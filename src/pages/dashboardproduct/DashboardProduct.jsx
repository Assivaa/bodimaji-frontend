import React from "react";
import Dashboard from "../admin/dashboard";
import { Link } from "react-router-dom";
import "./dashboardproduct.css";

const DashboardProduct = () => {
  return (
    <>
       <Dashboard />
          <div className="sideright">
              <div className="title-product">Owner</div>
          <div className="formproduct-input">
              <input
                type="text"
                placeholder="Owner"
                required
              ></input>
              <div className="title-product2">Product Name</div>
              <input
                type="text"
                placeholder="Product Name"
              ></input>
               <div className="title-product3">Description</div>
              <input
                type="text"
                placeholder="Product Description"
              ></input>
              <div className="title-product4">Price</div>
              <input
                type="text"
                placeholder="Product Price in Rp"
              ></input>
               <div className="title-product5">Upload Image</div>
              <input
                type="text"
                placeholder="Upload Image URL"
              ></input>
            </div>
            <br />
            <div className="FormButton Submit">
              <div className="Submitform"> 
              <Link to="/admin/dashboard" className="LinkNav">
                <button> 
                  <span>Submit</span>
                </button>
                </Link>
              </div>
            </div>       
        </div>
    </>
  );
};

export default DashboardProduct;
