import React from "react";
import Navbar from "../../components/navbar/Navbar";
import UserRegister from "../../components/register/Register";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const Register = () => {
  return (
    <>
      <Navbar />
      <UserRegister />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Register;