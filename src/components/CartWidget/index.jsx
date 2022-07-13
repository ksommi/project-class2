import React from "react";
import { ImCart } from "react-icons/im";
import { Shop } from "../../context/shopContext";
import "./style.css";

const CartWidget = () => {
  const { cart } = React.useContext(Shop);

  const totalItems = () => {
    return cart.reduce((acc, producto) => acc + producto.quantity, 0);
  };

  if (cart.length !== 0) {
    return (
      <div>
        <ImCart size={24} />
        <button className="cartLength">{totalItems()}</button>
      </div>
    );
  }
};

export default CartWidget;
