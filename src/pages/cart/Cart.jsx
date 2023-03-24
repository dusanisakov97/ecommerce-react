import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-title">
        <h1>Cart</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] != 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <p className="subtotal">Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button
          onClick={() => {
            checkout();
            {
              totalAmount > 0
                ? alert("Thank you for shopping!")
                : alert("Your shopping cart is empty!");
            }
          }}
        >
          {" "}
          Checkout{" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
