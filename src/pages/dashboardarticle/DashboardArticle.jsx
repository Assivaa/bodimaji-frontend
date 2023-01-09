import React from "react";
import Dashboard from "../admin/dashboard";
import { Link } from "react-router-dom";

import "./dashboardarticle.css";

const DashboardArticle = () => {
       return (
         <>
          <Dashboard />
          <div className="sideright">
          <div>
            <Link to="/article">
                <span class="text">Article</span>
            </Link>
          </div>
          <div className="formarticle-input">
              <input
                type="text"
                placeholder="Title"
                required
              ></input>
              <input
                type="text"
                placeholder="Description"
              ></input>
            </div>
        </div>
         </>
       );
};

export default DashboardArticle;
