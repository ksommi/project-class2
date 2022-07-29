import React, { useContext } from "react";
import { Shop } from "../../context/shopContext";
import "./style.css";
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import generarOrden from "../../utils/generarOrden";
import guardarOrden from "../../utils/guardarOrden";
import Swal from "sweetalert2";
import orderForm from "../../utils/formOrden";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(Shop);
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce(
      (acc, producto) => acc + producto.price * producto.quantity,
      0
    );
  };

  const confirmBuy = async (orderBuyer) => {
    const orden = generarOrden(orderBuyer, cart, getTotalPrice());
    guardarOrden(cart, orden, navigate);
    clear();
  };

  const emptyCartModal = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "La compra será cancelada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cancelada!", "Su carrito está vacio", "success");
        clear();
      }
    });
  };

  return (
    <div>
      {cart.length !== 0 ? (
        <div className="cartContainer">
          <table>
            <thead>
              <tr className="cartRows">
                <th className="thTable">Producto</th>
                <th className="thTable">Cantidad</th>
                <th className="thTable">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((producto) => {
                const precioItems = () => {
                  return producto.quantity * producto.price;
                };
                return (
                  <tr key={producto.id} className="cartRows">
                    <td className="tableProduct">
                      <img
                        src={producto.image}
                        alt={producto.title}
                        className="tableImg"
                      />
                      <p className="tableTitle">{producto.title}</p>
                    </td>
                    <td className="tableQty">{producto.quantity}</td>
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
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td className="totalPriceL">Total</td>
                <td className="totalPrice">
                  <p>${getTotalPrice()}</p>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="cartButtons">
            <button onClick={emptyCartModal} className="cartDeleteBtn">
              <MdDeleteForever className="iconClear" size={24} />
              Vaciar carrito
            </button>
            <button
              className="cartBuyBtn"
              onClick={() => {
                orderForm(confirmBuy);
              }}
            >
              Continuar compra
            </button>
          </div>
        </div>
      ) : (
        <div className="noCartContainer">
          <h2>
            Ups! Su carrito esta vacío. Regresa al inicio y elige unos
            productos.
          </h2>
          <Link to="/" className="noCartButton">
            Volver
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
