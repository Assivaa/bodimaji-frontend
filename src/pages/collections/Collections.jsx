import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CollectionCard from "../../components/collection/Collection";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const Collection = () => {
  return (
    <>
      <Navbar />
      <div className="collection-body">
        <div className="title">Explore Collection</div>
        <div className="collection-wrapper">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Collection;
