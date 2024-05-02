import "../itemListContainer/ItemListContainer.css";
import ItemList from "./ItemList.jsx";
import { useEffect, useState } from "react";
import { products } from "../../../productsMock.js";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject({ status: 400, message: "Algo salió mal" });
      }
    });
    getProducts
      .then((res) => setItems(res))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
