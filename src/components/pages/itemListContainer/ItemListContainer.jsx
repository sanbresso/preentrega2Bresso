import "../itemListContainer/ItemListContainer.css";
import ProductCard from "../../common/productCard/ProductCard.jsx";
const ItemListContainer = () => {
  return (
    <div>
      <h1>Bienvenidas al catálogo de insumos</h1>
      <img
        src="https://res.cloudinary.com/dwj4jcs0g/image/upload/v1714145163/nailsby.breik_hjr0qd.png"
        alt="Logo"
      />
      {/* ACÁ VAN A IR LAS TARJETAS */}
      <ProductCard titulo="titulo 1" descripcion="descripcion" precio={200} />
      <ProductCard titulo="titulo 2" descripcion="descripcion" precio={300} />
      <ProductCard titulo="titulo 3" descripcion="descripcion" precio={400} />
    </div>
  );
};

export default ItemListContainer;
