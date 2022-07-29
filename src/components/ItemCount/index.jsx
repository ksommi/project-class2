import React, { useState } from "react";
import Swal from "sweetalert2";
import "./style.css";

const ItemCount = ({ handleAdd, stock, handleDone }) => {
  const [contador, setContador] = useState(1);

  const onAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const onOut = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const handleConfirm = () => {
    if (contador <= stock) {
      handleAdd(contador);
    } else {
      Swal.fire("La cantidad seleccionada supera al stock disponible!");
    }
  };

  return (
    <div className="containerSuperiorItemCount">
      {stock >= 1 ? (
        <>
          <div className="containerItemCount">
            <button onClick={onOut} className="buttonCount">
              -
            </button>
            <span className="numberCount" onChange={handleConfirm()}>
              {contador}
            </span>
            <button onClick={onAdd} className="buttonCount">
              +
            </button>
          </div>
          <button onClick={handleDone} className="buttonAddCart">
            Agregar al carrito
          </button>
        </>
      ) : (
        <div>Sin stock</div>
      )}
    </div>
  );
};

export default ItemCount;
