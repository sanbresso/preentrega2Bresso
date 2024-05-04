import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import CounterContainer from "./components/common/counter/CounterContainer.jsx";
import Layout from "./components/layout/Layout.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<h1>Página not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
