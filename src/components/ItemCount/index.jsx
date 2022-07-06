import React, { useState } from "react";
import "./style.css";

const ItemCount = ({ handleAdd, stock }) => {
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
      alert("Value > maxQuantity");
    }
  };

  return (
    <div className="containerSuperiorItemCount">
      <div className="containerItemCount">
        <button onClick={onOut} className="buttonCount">
          -
        </button>
        <span className="numberCount">{contador}</span>
        <button onClick={onAdd} className="buttonCount">
          +
        </button>
      </div>
      <button onClick={handleConfirm} className="buttonAddCart">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
