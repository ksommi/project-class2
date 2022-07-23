import React, { useContext } from "react";
import { Shop } from "../../context/shopContext";
import "./style.css";
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import generarOrden from "../../utils/generarOrden";
import guardarOrden from "../../utils/guardarOrden";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(Shop);
  const navigate = useNavigate();

  const clearItems = () => {
    clear();
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (acc, producto) => acc + producto.price * producto.quantity,
      0
    );
  };

  const confirmBuy = async () => {
    const orden = generarOrden(
      {
        name: "Kevin",
        address: "Avenida Siempreviva 742",
        mail: "ksommi@gmail.com",
      },
      cart,
      getTotalPrice()
    );
    guardarOrden(cart, orden, navigate);
    setTimeout(() => {
      clear();
    }, 10000);
  };

  return (
    <div>
      {cart.length !== 0 ? (
        <table className="cartContainer">
          <tr className="cartRows">
            <th className="thTable">Items</th>
            <th className="thTable">Image</th>
            <th className="thTable">Title</th>
            <th className="thTable">Price</th>
            <th>
              <button onClick={clearItems} className="cartDelete">
                <MdDeleteForever className="iconClear" size={24} />
                Clear
              </button>
            </th>
          </tr>
          {cart.map((producto) => {
            const precioItems = () => {
              return producto.quantity * producto.price;
            };
            return (
              <tr key={producto.id} className="cartRows">
                <td className="tableQty">{producto.quantity}</td>
                <td>
                  <img
                    src={producto.image}
                    alt={producto.title}
                    className="tableImg"
                  />
                </td>
                <td className="tableTitle">{producto.title}</td>
                <td className="tablePrice">$ {precioItems()}</td>
                <td>
                  <button
                    onClick={() => removeItem(producto.id)}
                    className="tableDelete"
                  >
                    <MdDelete size={24} className="iconDelete" />
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="totalPrice">
              <p>Total: ${getTotalPrice()}</p>
            </td>
            <td>
              <button onClick={confirmBuy}>Confirmar compra</button>
            </td>
          </tr>
        </table>
      ) : (
        <div className="noCartContainer">
          <h2>Oops! Your cart is empty. Go back to select some product.</h2>
          <Link to="/" className="noCartButton">
            Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
