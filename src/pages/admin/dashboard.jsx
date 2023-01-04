import React from "react";
import NavbarAdmin from "../../components/navbaradmin/Admin";
import { FaProductHunt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="dashboardpage">

      {/* sidebar */}
        <ul class="side-menu top">
			<li class="active">
        <a href="#">
              <FaHome /> <span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				
        <div className="dash-article">
        <a href="#">
              <FaBook /> <span class="text">Article</span>
        </a>
        </div>
					
			
			</li>
			<li>
				
        <div className="dash-collection">
        <a href="#">
        <FaProductHunt /> <span class="text">Collection</span>
				</a>
        </div>
			</li>
			
		  </ul>
    
    {/* setting and logout */}
    <ul class="side-menu">
			<li>
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>

    {/* navbar */}

    <div className="content">
          <nav>
            <i class='bx bx-menu' ></i>
            <a href="#" class="nav-link">Categories</a>
            <form action="#">
              <div class="form-input">
                <input type="search" placeholder="Search..."></input>
                <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
              </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden></input>
            <label for="switch-mode" class="switch-mode"></label>
            <a href="#" class="notification">
              <i class='bx bxs-bell' ></i>
              <span class="num">8</span>
            </a>
            <a href="#" class="profile">
              <img src="img/people.png"></img>
            </a>
          </nav>

          

    </div>
    
         



      </div>

    </>
  );
};

export default Dashboard;
