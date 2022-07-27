import React, { useContext } from "react";
import { Shop } from "../../context/shopContext";
import "./style.css";
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import generarOrden from "../../utils/generarOrden";
import guardarOrden from "../../utils/guardarOrden";
import Swal from "sweetalert2";

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

  const confirmModal = () => {
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

  const orderForm = async () => {
    const messageError = [];

    const checkList = (name, email, number, address) => {
      if (
        (!/([^a-zA-Z ])/.test(name) || name !== "") &&
        /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email) &&
        number.length >= 5 &&
        address.length >= 4
      ) {
        confirmBuy(formValues);
        Swal.fire({
          title: "Sus datos fueron recibidos!",
          html: "Espere mientras se genera su orden",
          timer: 4000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      } else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
        Swal.fire("El formato del mail es incorrecto");
      } else {
        let mensajeE = "";
        messageError.forEach((element) => {
          mensajeE = mensajeE + `<br/>` + element;
        });
        Swal.fire(mensajeE);
      }
    };

    const checkMails = (mail1, mail2) => {
      if (mail1 !== mail2) {
        Swal.fire("Los mails no coinciden");
        return false;
      } else {
        return true;
      }
    };

    const { value: formValues } = await Swal.fire({
      title: "Introduce tus datos",
      html: `<div class="orderInputContainer">
      <label>Nombre</label>
      <input type="text" id="swalInputName" class="swal2-input">
      <label>Email</label>
      <input type="email" id="swalInputMail" class="swal2-input">
      <label>Repetir Email</label>
      <input type="email" id="swalInputMailbis" class="swal2-input">
      <label>Teléfono</label>
      <input type="number" min="0" id="swalInputNumber" class="swal2-input">
      <label>Dirección</label>
      <input type="text" id="swalInputAddress" class="swal2-input">
      </div>`,
      focusConfirm: false,
      preConfirm: () => {
        const formulario = {
          name: document.getElementById("swalInputName").value,
          address: document.getElementById("swalInputAddress").value,
          mail: document.getElementById("swalInputMail").value,
          mail2: document.getElementById("swalInputMailbis").value,
          number: document.getElementById("swalInputNumber").value,
        };
        for (const [clave, valor] of Object.entries(formulario)) {
          if (valor === undefined || valor === null || valor === "") {
            messageError.push("Los datos en " + clave + " estan incompletos");
          }
        }
        return formulario;
      },
    });

    if (formValues) {
      if (checkMails(formValues.mail, formValues.mail2) === true) {
        checkList(
          formValues.name,
          formValues.mail,
          formValues.number,
          formValues.address
        );
      }
    }
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
            <button onClick={confirmModal} className="cartDeleteBtn">
              <MdDeleteForever className="iconClear" size={24} />
              Vaciar carrito
            </button>
            <button className="cartBuyBtn" onClick={orderForm}>
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
