import Footer from "./components/layout/footer/Footer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import Counter from "./components/common/counter/Counter.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />

      <Counter />
    </div>
  );
}

export default App;
