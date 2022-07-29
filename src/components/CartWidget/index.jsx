import React from "react";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import { Shop } from "../../context/shopContext";
import "./style.css";

const CartWidget = () => {
  const { cart, totalItems } = React.useContext(Shop);

  return (
    <div>
      <ImCart size={25} />
      {cart.length !== 0 ? (
        <button className="cartLength">
          <Link to="/cart">{totalItems()}</Link>
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default CartWidget;
