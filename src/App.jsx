import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import CounterContainer from "./components/common/counter/CounterContainer.jsx";
import Layout from "./components/layout/Layout.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";

function App() {
  return (
    <div>
      <Layout>
        <ItemListContainer greeting={"Bievenidxs al catálogo de insumos"} />

        <CounterContainer />
        <CartContainer />
      </Layout>
    </div>
  );
}

export default App;
