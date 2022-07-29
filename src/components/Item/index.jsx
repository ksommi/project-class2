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
      <img
        className="productImage"
        src={product.image}
        alt="Imagen del producto"
      />
      <h3 className="productTitle">{product.title}</h3>
      <hr />
      <p className="productPrice">${product.price}</p>
      <button href="#" className="productLink btn" onClick={handleDetail}>
        Ver más
      </button>
    </li>
  );
};

export default Item;
