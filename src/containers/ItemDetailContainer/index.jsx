import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {
  const [productDetail, getProductDetail] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/15");
        const data = await response.json();
        console.log(data);
        getProductDetail(data);
      } catch (error) {
        console.log("Hubo un error");
        console.log(error);
      }
    };

    getProduct();
  }, []);

  console.log(productDetail);

  return (
    <div>
      <ItemDetail product={productDetail} />
    </div>
  );
};

export default ItemDetailContainer;
