import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loading from "../../components/Loading";
import "./style.css";
import Swal from "sweetalert2";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          productos.push({ id: doc.id, ...doc.data() });
        });

        setProductos(productos);
        setProductosFiltrados(productos);
      } catch (error) {
        Swal.fire("Hubo un error :" + error);
      }
    };

    getProductos();
  }, []);

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(
        (producto) => producto.category === params.categoryId
      );
      setProductosFiltrados(productosFiltrados);
    } else {
      setProductosFiltrados(productos);
    }
  }, [params, productos]);

  return (
    <>
      {productos.length !== 0 ? (
        <ItemList products={productosFiltrados} />
      ) : (
        <div className="loadingContainer">
          <Loading />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
