import React, { useContext, useState } from "react";
import { Shop } from "../../context/shopContext";
import "./style.css";
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import generarOrden from "../../utils/generarOrden";
import guardarOrden from "../../utils/guardarOrden";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import OrderForm from "../../components/Checkout";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(Shop);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const getTotalPrice = () => {
    return cart.reduce(
      (acc, producto) => acc + producto.price * producto.quantity,
      0
    );
  };

  const confirmBuy = async (orderBuyer) => {
    const orden = generarOrden(orderBuyer, cart, getTotalPrice());
    guardarOrden(cart, orden, navigate);
    setShowForm(false);
    clear();
  };

  const emptyCartModal = () => {
    MySwal.fire({
      title: <p>¿Estás seguro?</p>,
      text: "La compra será cancelada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Cancelada!", "Su carrito está vacio", "success");
        clear();
        setShowForm(false);
      }
    });
  };

  return (
    <div>
      {showForm && (
        <OrderForm setShowForm={setShowForm} confirmBuy={confirmBuy} />
      )}
      {cart.length !== 0 ? (
        <div className="cartContainer boxShadow">
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
              <tr className="cartRows">
                <td></td>
                <td className="totalPriceL">Total</td>
                <td className="totalPrice">
                  <p>${getTotalPrice()}</p>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="cartButtons">
            <button onClick={emptyCartModal} className="cartDeleteBtn button">
              <MdDeleteForever className="iconClear" size={24} />
              Vaciar carrito
            </button>
            <button
              className="cartBuyBtn button"
              onClick={() => setShowForm(true)}
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
