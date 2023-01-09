import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";

import iconClose from "../resources/icons/icon-close.svg";
import styled from "styled-components";
import { rootAPI } from "../pages/home/Home";

const Slider = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isActive, setIsActive] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, totalCart] = useState({});
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getCart = async () => {
    const { data } = await axios.get(rootAPI + `/cart/${currentUser._id}`);
    setCart(data.products);
    totalCart(data);
  };

  useEffect(() => {
    getCart();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  const Sidenav = styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: white;
    color: black;
    overflow-x: hidden;
    transition: 0.3s;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
  `;

  const Wrapper = styled.div`
    padding: 58px 70px;
  `;

  const Container = styled.div`
    padding: 32px 0px;
    text-decoration: none;
    font-family: "Arapey";
    font-weight: 400;
    font-size: 24px;
    color: #000000;
    display: block;
  `;

  const Quantity = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `;

  const Input = styled.div`
    padding-left: 16px;
  `;

  const ColorSelector = styled.div`
    font-family: "Arapey";
    font-size: 24px;
    color: #951914;
  `;

  const Title = styled.div`
    text-decoration: none;
    font-size: 25px;
    font-weight: 700;
    font-size: 24px;
    color: #0d0d0d;
    display: block;
  `;

  const Remove = styled.div`
    font-family: "Arapey";
    text-align: end;
    font-weight: 400;
    font-size: 20px;
    text-decoration-line: underline;
    color: #272727;
    cursor: pointer;
  `;

  const MenuClose = styled.img`
    float: right;
    cursor: pointer;
  `;

  const Price = styled.div`
    font-family: "Abril Fatface";
    font-size: 24px;
    color: #951914;
  `;

  const Subtotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  const Checkout = styled.div`
    padding-top: 70px;
    padding-bottom: 70px;
    text-align: center;
  `;

  const CheckoutButton = styled.button`
    font-family: "Inter";
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #fcfcfc;
    background: #951914;
    border: 1px solid #951914;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    padding: 21px 81px;
  `;

  const ProductPrice = styled.div`
    font-family: "Abril Fatface";
    font-size: 24px;
    color: #951914;
  `;

  return (
    <>
      {currentUser ? (
        <>
          <div className="menu-item">
            <Link to={`/profile`} className="LinkNav">
              My Profile
            </Link>
          </div>
          <div className="menu-item" onClick={handleClick}>
            <FaShoppingCart /> Cart{" "}
          </div>
          <div className="menu-item">
            <button className="menu-item-logout" onClick={handleLogout}>
              <span>Logout</span>
            </button>
          </div>
          <Sidenav
            style={{
              width: isActive ? "455px" : "0",
            }}
          >
            <Wrapper>
              <MenuClose
                src={iconClose}
                alt="icon-close"
                className="menu-cart-close"
                onClick={handleClick}
              />
              <Title> {currentUser.fullname}'s Cart</Title>
              <Remove>Remove</Remove>
              <Container>
                {cart.map((cartItem) => (
                  <div>
                    <div className="menu-cart-name">{cartItem.name}</div>
                    {/* <ColorSelector>Beige</ColorSelector> */}
                    <Quantity>
                      <Price>Rp{cartItem.price}</Price>
                      <Input>
                        <input
                          type="number"
                          min="1"
                          defaultValue={cartItem.quantity}
                          key={cartItem.productId}
                        />
                      </Input>
                    </Quantity>
                  </div>
                ))}
              </Container>
              <Subtotal>
                <div className="menu-cart-subtotal-title">Subtotal:</div>
                <ProductPrice>Rp{total.bill}</ProductPrice>
              </Subtotal>
              <Checkout>
                <Link to="/cart">
                  <CheckoutButton>Checkout</CheckoutButton>
                </Link>
              </Checkout>
            </Wrapper>
          </Sidenav>
        </>
      ) : (
        <div className="menu-item">
          <Link to="/register" className="LinkNav">
            Register
          </Link>
        </div>
      )}
    </>
  );
};

export default Slider;
