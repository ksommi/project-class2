import React from "react";
import CartWidget from "../CartWidget";
import "./style.css";
import { BiFootball } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="container-navbar">
      <a href="index">
        <BiFootball size={24} />
      </a>
      <ul className="container-list">
        <li>
          <a href="index">Inicio</a>
        </li>
        <li>
          <a href="index">Indumentaria</a>
        </li>
        <li>
          <a href="index">Pelotas</a>
        </li>
        <li>
          <a href="index">Botines</a>
        </li>
        <li>
          <a href="index">Contacto</a>
        </li>
        <li>
          <a href="index">Iniciar Sesión</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
