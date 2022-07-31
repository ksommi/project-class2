import React from "react";
import { ImCart } from "react-icons/im";
import { Shop } from "../../context/shopContext";
import "./style.css";

const CartWidget = () => {
  const { cart, totalItems } = React.useContext(Shop);

  return (
    <div>
      <ImCart size={25} />
      {cart.length !== 0 ? (
        <button className="cartLength">
          <span to="/cart">{totalItems()}</span>
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default CartWidget;
