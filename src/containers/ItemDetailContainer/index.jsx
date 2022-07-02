import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productDetail, getProductDetail] = useState({});

  const params = useParams();
  console.log(params);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        const data = await response.json();
        getProductDetail(data);
      } catch (error) {
        console.log("Hubo un error");
        console.log(error);
      }
    };

    getProduct();
  }, [params]);

  return (
    <div>
      <ItemDetail product={productDetail} />
    </div>
  );
};

export default ItemDetailContainer;
