import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./admin.css";

const NavbarAdmin = () => {
  
  return (
    <div className="navbaradmin-wrap">
    <div
      className="navbaradmin"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="NavbarAdmin-title">
        Bodimaji
      </div>
      
            
    </div>
    <div className="iconProfile">
    <img
      src={require("../../resources/images/profile.png")}
      alt="home-alt"
    />
    </div>    
    </div>
  );
};

export default NavbarAdmin;
