import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AllCollection from "../../components/collection/Collection";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const Collection = () => {
  return (
    <>
      <Navbar />
      <AllCollection />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Collection;
