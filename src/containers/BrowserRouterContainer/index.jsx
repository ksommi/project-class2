import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../../containers/Cart";
import NavBar from "../../components/NavBar";
import NotFound from "../../components/NotFound";
import ItemDetailContainer from "../ItemDetailContainer";
import ItemListContainer from "../ItemListContainer";
import Order from "../../components/Order";

const BrowserRouterContainer = () => {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/:orderId" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BrowserRouterContainer;
