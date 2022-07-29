import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});

  const params = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "products", params.productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productDetail = { id: docSnap.id, ...docSnap.data() };
          setProductDetail(productDetail);
        } else {
          Swal.fire("No existe el producto!");
        }
      } catch (error) {
        Swal.fire("Hubo un error :" + error);
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
