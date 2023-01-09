import React from "react";
import Dashboard from "../admin/dashboard";
import { Link } from "react-router-dom";

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
        </div>
         </>
       );
};

export default DashboardArticle;
