import React from "react";
import "./index.css";

const Item = ({ product }) => {
  return (
    <li className="containerProduct">
      <h3 className="productTitle">{product.title}</h3>
      <img
        className="productImage"
        src={product.image}
        alt="Imagen del producto"
      />
      <p className="productDescription">{product.description}</p>
      <p className="productPrice">${product.price}</p>
      <a href="#" className="productLink">
        Ver producto en detalle
      </a>
    </li>
  );
};

export default Item;
