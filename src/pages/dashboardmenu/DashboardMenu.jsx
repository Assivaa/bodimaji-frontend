import React from "react";
import Dashboard from "../admin/dashboard";

const DashboardMenu = () => {
  return (
    <>
      <Dashboard />
      <div className="sideright">
        <div className="welcomingwords">
          Welcome, Admin! What would you do today?
        </div>
        <div className="undraw">
            <img
              src={require("../../resources/images/undraw_Setup_analytics_re_foim.png")}
              alt="undraw_Setup_analytics_re_foim"
            />
        </div>
      </div>
    </>
  );
};

export default DashboardMenu;
