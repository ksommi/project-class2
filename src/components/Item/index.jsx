import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${product.id}`);
  };

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
      <button href="#" className="productLink" onClick={handleDetail}>
        Ver producto en detalle
      </button>
    </li>
  );
};

export default Item;
