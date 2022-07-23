import React, { useContext, useState } from "react";
import "./index.css";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/shopContext";
import Loading from "../Loading";

const ItemDetail = ({ product }) => {
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
      <div className="detailImgContainer">
        {product.image ? (
          <img
            src={product.image}
            alt="imagen detallada"
            className="detailImage"
          />
        ) : (
          <div className="detailLoading">
            <Loading />
          </div>
        )}
      </div>

      <div className="detailPRDContainer">
        <p className="detailCategory">{product.category}</p>
        <hr />
        <h1 className="detailTitle">{product.title}</h1>
        <p className="detailDescription">
          {product.description} Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis maximus lobortis magna, id cursus ante tincidunt
          eu. Proin vel nisi convallis, convallis metus et, finibus ligula.
          Proin in porttitor sapien. Donec venenatis diam mi, non euismod sapien
          faucibus pellentesque. Etiam pulvinar tempor rutrum. Donec et
          ullamcorper lectus. Cras a nisl porta, euismod odio semper, imperdiet
          metus. Morbi ultricies egestas viverra.
        </p>
        <p className="detailPrice">${product.price}</p>
        {!qtyAdded ? (
          <ItemCount handleAdd={handleConfirm} stock={product.stock} />
        ) : (
          <button onClick={handleTerminate} className="goCart">
            Terminar compra
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
