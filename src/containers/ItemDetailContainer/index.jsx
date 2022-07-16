import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});

  const params = useParams();
  console.log(params);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "products", params.productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap.id);
          console.log("Document data:", docSnap.data());
          const productDetail = { id: docSnap.id, ...docSnap.data() };
          setProductDetail(productDetail);
        } else {
          console.log("No such document!");
        }
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
