import React from "react";
import NavbarAdmin from "../../components/navbaradmin/Admin";
import { FaProductHunt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="dashboardpage-white">
        <div className="dashboardpage"></div>
        {/* sidebar */}
        <ul class="side-menu top">
          <li class="active">
            <div className="dash-home">
            <Link to="/admin/menu" className="LinkNav">
                   <FaHome /> <span class="text">Dashboard</span>
            </Link>
            </div>
          </li>
          <li>
            <div className="dash-article">
            <Link to="/admin/article" className="LinkNav">
                <FaBook /> <span class="text">Article</span>
             </Link>
            </div>
          </li>
          <li>
            <div className="dash-product">
            <Link to="/admin/product" className="LinkNav">
                <FaProductHunt /> <span class="text">Product</span>
            </Link>
            </div>
          </li>
        </ul>

        {/* setting and logout */}
        <ul class="side-menu">
          <li>
            <div className="setting">
              <a href="#">
                <FaArrowRight />
                <span class="text">Settings</span>
              </a>
            </div>
          </li>
          <li>
            <div className="keluar">
              <a href="#" class="logout">
                <FaArrowRight />
                <span class="text">Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="sideright">
        
      </div>
      
    </>
  );
};

export default Dashboard;
