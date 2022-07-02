import "./App.css";
import NavBar from "./components/NavBar/index.jsx";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  /*  <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */

  return (
    <BrowserRouter className="App">
      <NavBar />
      <ItemDetailContainer />
    </BrowserRouter>
  );
}

export default App;
