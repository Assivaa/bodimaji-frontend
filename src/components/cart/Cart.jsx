import React, { useEffect, useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div>      
      <div className= "title">Explore Collection</div>
      <div className="image5">
          <img
            src={require("../../resources/images/hijau.jpg")}
            alt="image"
          />
          <div className="cart_title">Everyone Shirt in pearl</div>
          <div className="cart_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing<br/>
          elit. Enim minus quae ut omnis sunt delectus odio <br/>
          temporibus! Eius dolore ex vitae esse, similique quo<br/>
          velit est hic non delectus nam!
      </div>
         
         <p className="price">Rp200.000</p>
      <Link to={`/product`} className="info_button">
        View Detail
      </Link>
       </div>
      <br/> <br/>
      {/* gambar 2 */}
       <div className="image2">
          <img
            src={require("../../resources/images/hijau.jpg")}
            alt="image"
          />
          <div className="cart_title">Everyone Shirt in pearl</div>
          <div className="cart_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing<br/>
          elit. Enim minus quae ut omnis sunt delectus odio <br/>
          temporibus! Eius dolore ex vitae esse, similique quo<br/>
          velit est hic non delectus nam!
      </div>
         
         <p className="price">Rp200.000</p>
      <Link to={`/product`} className="info_button">
        View Detail
      </Link>
       </div>

      {/* gambar3 */}
      <div className="image3">
          <img
            src={require("../../resources/images/pink.jpg")}
            alt="image"
          />
          <div className="cart_title">Everyone Shirt in pearl</div>
          <div className="cart_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing<br/>
          elit. Enim minus quae ut omnis sunt delectus odio <br/>
          temporibus! Eius dolore ex vitae esse, similique quo<br/>
          velit est hic non delectus nam!
      </div>
         
         <p className="price">Rp200.000</p>
      <Link to={`/product`} className="info_button">
        View Detail
      </Link>
       </div>
      <br/> <br/>
      {/* gambar 4 */}
       <div className="image4">
          <img
            src={require("../../resources/images/pink.jpg")}
            alt="image"
          />
          <div className="cart_title">Everyone Shirt in pearl</div>
          <div className="cart_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing<br/>
          elit. Enim minus quae ut omnis sunt delectus odio <br/>
          temporibus! Eius dolore ex vitae esse, similique quo<br/>
          velit est hic non delectus nam!
      </div>
         
         <p className="price">Rp200.000</p>
      <Link to={`/product`} className="info_button">
        View Detail
      </Link>
       </div>
       

        
    </div>

    
  );
};

export default CartPage;
