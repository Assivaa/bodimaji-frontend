import React from "react";
import Dashboard from "../admin/dashboard";

const DashboardProduct = () => {
  return (
    <>
      <Dashboard />
      <div className="sideright">
        <div className="admin-search-product-box-container">
          <h1>Search box</h1>
          <p><input type="text" placeholder="Search product here" /></p>
          <button type="button">Search</button>
        </div>
        <div className="admin-add-product-button">
          <button type="button">Add Product</button>
        </div>
        <div className="admin-delete-product-button">
          <button type="button">Delete Product</button>
        </div>
      </div >
    </>
  );
};

export default DashboardProduct;
