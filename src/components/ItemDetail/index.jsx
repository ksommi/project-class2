import React, { useContext, useState } from "react";
import "./index.css";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/shopContext";

const ItemDetail = ({ product }) => {
  product.stock = 10;
  const [qtyAdded, setQtyAdded] = useState(0);
  const navigate = useNavigate();

  const { addItem } = useContext(Shop);

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  };

  const handleTerminate = () => {
    addItem(product, qtyAdded);
    navigate("/cart");
  };

  console.log(qtyAdded);
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
          {!qtyAdded ? (
            <ItemCount handleAdd={handleConfirm} stock={product.stock} />
          ) : (
            <button onClick={handleTerminate} className="goCart">
              Terminar compra
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
