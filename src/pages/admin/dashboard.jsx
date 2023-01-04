import React from "react";
import NavbarAdmin from "../../components/navbaradmin/Admin";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

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
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-shopping-bag-alt' ></i>
					<span class="text">Article</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Collection</span>
				</a>
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
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Dashboard;
