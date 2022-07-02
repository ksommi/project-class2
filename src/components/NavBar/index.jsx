import React from "react";
import CartWidget from "../CartWidget";
import "./style.css";
import { BiFootball } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = () => {
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
          <Link to="/">Iniciar Sesión</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
