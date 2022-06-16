import "./App.css";
import NavBar from "./components/NavBar/index.jsx";
import ItemListContainer from "./containers/ItemListContainer";
import musemShirts from "./assets/museumShirts.webp";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"hola coders"} />
      <img src={musemShirts} alt="Camisetas" />
    </div>
  );
}

export default App;
