import React from "react";
import CartWidget from "../CartWidget";
import "./style.css";
import { BiFootball } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container-navbar">
      <Link to="/">
        <BiFootball size={24} className="logo" />
      </Link>
      <div className="container-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/category/indumentaria"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Indumentaria
        </NavLink>
        <NavLink
          to="/category/camisetas"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Camisetas
        </NavLink>
        <NavLink
          to="/category/pelotas"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Pelotas
        </NavLink>
        <NavLink
          to="/category/botines"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Botines
        </NavLink>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
