import React, { useContext } from "react";
import { Shop } from "../../context/shopContext";
import "./style.css";
import { MdDelete, MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(Shop);

  const deleteItem = (e) => {
    removeItem(e);
  };

  const clearItems = () => {
    clear();
  };

  return (
    <div>
      {cart.length !== 0 ? (
        <table className="cartContainer">
          <tr className="cartRows">
            <th className="thTable">Image</th>
            <th className="thTable">Title</th>
            <th className="thTable">Unit Price</th>
            <th className="thTable">Quantity</th>
          </tr>
          {cart.map((producto) => {
            return (
              <tr key={producto.id} className="cartRows">
                <td>
                  <img
                    src={producto.image}
                    alt={producto.title}
                    className="tableImg"
                  />
                </td>
                <td className="tableTitle">{producto.title}</td>
                <td className="tablePrice">{producto.price}</td>
                <td className="tableQty">{producto.quantity}</td>
                <td>
                  <button
                    id={producto.id}
                    onClick={deleteItem}
                    className="tableDelete"
                  >
                    <MdDelete size={24} className="iconDelete" />
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <button onClick={clearItems} className="cartDelete">
              <MdDeleteForever className="iconClear" size={24} />
              Clear cart
            </button>
          </tr>
        </table>
      ) : (
        <div>Cart empty</div>
      )}
    </div>
  );
};

export default Cart;
