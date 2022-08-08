import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ condition }) => {
  return (
    <div className={`${condition === true ? "open" : ""} ${"container-links"}`}>
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
  );
};

export default NavBar;
