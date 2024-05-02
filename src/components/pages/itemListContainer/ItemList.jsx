import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.length > 0 ? (
        <>
          <ProductCard
            title={items[0].title}
            price={items[0].price}
            description={items[0].description}
            img={items[0].img}
          />
          <ProductCard
            title={items[0].title}
            price={items[0].price}
            description={items[0].description}
            img={items[0].img}
          />
        </>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};

export default ItemList;
