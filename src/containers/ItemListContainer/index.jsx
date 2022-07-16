import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  const params = useParams();

  console.log(params);

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
        console.log("hubo un error");
        console.log(error);
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

  console.log(productos);

  return (
    <div>
      <div>
        {productos.length !== 0 ? (
          <ItemList products={productosFiltrados} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
