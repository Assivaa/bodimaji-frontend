import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CartPage from "../../components/cart/Cart";
import BeforeFooter from "../../components/beforeFooter/BeforeFooter";
import Footer from "../../components/footer/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <CartPage />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Cart;
