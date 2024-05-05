import "../itemListContainer/ItemListContainer.css";
import ItemList from "./ItemList.jsx";
import { useEffect, useState } from "react";
import { products } from "../../../productsMock.js";
import { useParams, useNavigate } from "react-router-dom";

const ItemListContainer = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  console.log(name);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    let productsFiltered = products.filter(
      (product) => product.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(name ? productsFiltered : products);
        }, 2000);
      } else {
        reject({ status: 400, message: "Algo salió mal" });
      }
    });
    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
    navigate("cart");
  }, [name]);
  return (
    <div>
      <ItemList items={items} error={error} />
    </div>
  );
};

export default ItemListContainer;
