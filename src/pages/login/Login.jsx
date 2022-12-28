import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Login from "../../components/login/Login";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const UserLogin = () => {
  return (
    <>
      <Navbar />
      <Login />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default UserLogin;