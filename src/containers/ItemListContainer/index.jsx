import React, { useEffect, useState } from "react";
import ItemCount from "../../components/ItemCount";
import ItemList from "../../components/ItemList";

const ItemListContainer = ({ greeting }) => {
  const handleAdd = () => {
    console.log("Se agregó al carrito");
  };

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log("hubo un error");
        console.log(error);
      }
    };

    getProductos();
  }, []);

  console.log(productos);

  return (
    <div>
      {greeting}
      <div>
        <ItemCount handleAdd={handleAdd} initialStock={10} />
      </div>
      <div>{productos ? <ItemList products={productos} /> : null}</div>
    </div>
  );
};

export default ItemListContainer;
