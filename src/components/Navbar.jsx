import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import CartCount from "./CartCount";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={require("../assets/logo.png")} alt="website logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/cart">
          <ShoppingCart size={32} />
          <CartCount />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
