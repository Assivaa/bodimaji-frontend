import React from "react";
import Dashboard from "../admin/dashboard";

const DashboardProduct = () => {
  return (
    <>
      <Dashboard />
      <div className="sideright">
        <div>
          <img
            src={require("../../resources/images/dress1.jpeg")}
            alt="dress1"
          /></div>
        <div>
          <img
            src={require("../../resources/images/dress2.jpg")}
            alt="dress2"
          /></div>
        <div>
          <img
            src={require("../../resources/images/dress3.jpg")}
            alt="dress3"
          /></div>
        <div>
          <img
            src={require("../../resources/images/dress4.jpg")}
            alt="dress4"
          /></div>
      </div>
    </>
  );
};

export default DashboardProduct;
