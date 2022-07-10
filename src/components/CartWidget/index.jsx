import React from "react";
import { ImCart } from "react-icons/im";
import { Shop } from "../../context/shopContext";
import "./style.css";

const CartWidget = () => {
  const { cart } = React.useContext(Shop);

  return (
    <div>
      <ImCart size={24} />
      {cart.length && <button className="cartLength">{cart.length}</button>}
    </div>
  );
};

export default CartWidget;
