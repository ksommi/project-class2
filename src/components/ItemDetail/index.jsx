import React from "react";
import "./index.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="detailContainer">
      <p className="detailCategory">{product.category}</p>
      <h1 className="detailTitle">{product.title}</h1>
      <div className="detailImgContainer">
        <img
          src={product.image}
          alt="imagen detallada"
          className="detailImage"
        />
        <div className="detailPRDContainer">
          <div className="detailPRContainer">
            <p className="detailPrice">${product.price}</p>
            <p className="detailRate">Rate: {product?.rating?.rate}</p>
          </div>
          <p className="detailDescription">{product.description}</p>
          <button className="addCart">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
