import React from "react";
import { useState } from "react";
import { BiFootball } from "react-icons/bi";
import { Link } from "react-router-dom";
import BurgerButton from "../../components/BurgerButton";
import CartWidget from "../../components/CartWidget";
import NavBar from "../../components/NavBar";
import "./style.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container-header">
      <Link to="/">
        <BiFootball size={24} className="logo" />
      </Link>
      <NavBar condition={open} />
      <Link to="/cart" className="navBarCart">
        <CartWidget />
      </Link>
      <BurgerButton setOpen={setOpen} open={open} />
    </div>
  );
};

export default Header;
