import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const Collection = () => {
  return (
    <>
      <Navbar />
      <Product />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Collection;
