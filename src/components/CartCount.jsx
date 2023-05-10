import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import "./CartCount.css";

const CartCount = () => {
  const { cartItems } = useContext(ShopContext);
  const itemCount = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );
  return itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null;
};

export default CartCount;
