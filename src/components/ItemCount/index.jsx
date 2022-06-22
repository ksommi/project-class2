import React, { useState } from "react";
import "./style.css";

const ItemCount = ({ handleAdd, initialStock }) => {
  const [contador, setContador] = useState(1);

  const onAdd = () => {
    if (contador < initialStock) {
      setContador(contador + 1);
    }
  };

  const onOut = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <div className="containerItemCount">
        <button onClick={onOut} className="buttonCount">
          -
        </button>
        <span className="numberCount">{contador}</span>
        <button onClick={onAdd} className="buttonCount">
          +
        </button>
      </div>
      <button onClick={handleAdd} className="buttonAddCart">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
