import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../../containers/Cart";
import NotFound from "../../components/NotFound";
import ItemDetailContainer from "../ItemDetailContainer";
import ItemListContainer from "../ItemListContainer";
import Order from "../../components/Order";
import Header from "../Header";
import Home from "../Home";

const BrowserRouterContainer = () => {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
