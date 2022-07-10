import React, { useContext } from "react";
import CartWidget from "../CartWidget";
import "./style.css";
import { BiFootball } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Shop } from "../../context/shopContext";

const NavBar = () => {
  const { estadoA } = useContext(Shop);

  return (
    <div className="container-navbar">
      <Link to="/">
        <BiFootball size={24} className="logo" />
      </Link>
      <ul className="container-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/category/jewelery">Jewelery</Link>
        </li>
        <li>
          <Link to="/category/women's clothing">Women's Clothing</Link>
        </li>
        <li>
          <Link to="/category/men's clothing">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/">{estadoA}</Link>
        </li>
      </ul>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
