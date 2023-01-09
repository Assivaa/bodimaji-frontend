import React from "react";
import Dashboard from "../admin/dashboard";
import { Link } from "react-router-dom";

import "./dashboardarticle.css";

const DashboardArticle = () => {
       return (
         <>
          <Dashboard />
          <div className="sideright">
              <div className="title-artcle">Title</div>
          <div className="formarticle-input">
              <input
                type="text"
                placeholder="Title"
                required
              ></input>
              <div className="title-artcle2">Description</div>
              <input
                type="text"
                placeholder="Description"
              ></input>
               <div className="title-artcle3">Author</div>
              <input
                type="text"
                placeholder="Author"
              ></input>
               <div className="title-artcle4">Upload Image</div>
              <input
                type="text"
                placeholder="Upload Image"
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

export default DashboardArticle;
