import React from "react";
import ItemCount from "../../components/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const handleAdd = () => {
    console.log("Se agregó al carrito");
  };

  return (
    <div>
      {greeting}
      <div>
        <ItemCount handleAdd={handleAdd} initialStock={10} />
      </div>
    </div>
  );
};

export default ItemListContainer;
