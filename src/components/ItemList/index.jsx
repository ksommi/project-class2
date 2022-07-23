import React from "react";
import Item from "../Item";
import "./index.css";

const ItemList = ({ products }) => {
  return (
    <ul className="containerItems paddings">
      {products.map((producto) => {
        return <Item product={producto} key={producto.id} />;
      })}
    </ul>
  );
};

export default ItemList;
