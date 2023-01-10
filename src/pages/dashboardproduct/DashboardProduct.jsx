import React from "react";
import Dashboard from "../admin/dashboard";
import { Link } from "react-router-dom";

const DashboardProduct = () => {
  return (
    <>
       <Dashboard />
          <div className="sideright">
              <div className="title-artcle">Owner</div>
          <div className="formarticle-input">
              <input
                type="text"
                placeholder="Owner"
                required
              ></input>
              <div className="title-artcle2">Product Name</div>
              <input
                type="text"
                placeholder="Product Name"
              ></input>
               <div className="title-artcle3">Description</div>
              <input
                type="text"
                placeholder="Product Description"
              ></input>
              <div className="title-artcle3">Price</div>
              <input
                type="text"
                placeholder="Product Price in Rp"
              ></input>
               <div className="title-artcle4">Upload Image</div>
              <input
                type="text"
                placeholder="Upload Image URL"
              ></input>
            </div>

            <div className="FormButton Submit">
              <a className="Submitform"> 
              <Link to="/admin/dashboard" className="LinkNav">
                <button> 
                  <span>Submit</span>
                </button>
                </Link>
              </a>
            </div>       
        </div>
    </>
  );
};

export default DashboardProduct;
