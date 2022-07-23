import "./App.css";
import BrowserRouterContainer from "./containers/BrowserRouterContainer";
import ShopProvider from "./context/shopContext";

function App() {
  return (
    <ShopProvider>
      <BrowserRouterContainer />
    </ShopProvider>
  );
}

export default App;
