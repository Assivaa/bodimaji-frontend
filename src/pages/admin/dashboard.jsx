import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboardpage">
        <div className="dashboard2">

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
					<span class="text">My Store</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Analytics</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-message-dots' ></i>
					<span class="text">Message</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-group' ></i>
					<span class="text">Team</span>
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

          <main>
            <div className="head-title">
              <div className="left">
                  <h1>Dashboard</h1>
                      <ul class="breadcrumb">
                            <li>
                                  <a href="#">Dashboard</a>
                            </li>
                                <li><i class='bx bx-chevron-right' ></i></li>
                            <li>
                                  <a class="active" href="#">Home</a>
                            </li>
                      </ul>

              </div>
            </div>
          </main>

    </div>
    
         

        
      </div>



      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Dashboard;
