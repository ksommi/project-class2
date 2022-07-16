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
          <Link to="/category/indumentaria">Indumentaria</Link>
        </li>
        <li>
          <Link to="/category/camisetas">Camisetas</Link>
        </li>
        <li>
          <Link to="/category/pelotas">Pelotas</Link>
        </li>
        <li>
          <Link to="/category/botines">Botines </Link>
        </li>
        <li>
          <Link to="/">{estadoA}</Link>
        </li>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
