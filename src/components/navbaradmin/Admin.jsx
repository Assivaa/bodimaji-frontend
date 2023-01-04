import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./admin.css";

const NavbarAdmin = () => {
  
  return (
    <div
      className="navbaradmin"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="gambarolshop">
        <img
          src={require("../../resources/icons/bodimaji-logo.png")}
          alt="logo"
        /> <div className="admin">Admin</div>
      </div>
     
            
    </div>
  );
};

export default NavbarAdmin;
