import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Register from "../../components/register/Register";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const UserRegister = () => {
  return (
    <>
      <Navbar />
      <Register />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default UserRegister;