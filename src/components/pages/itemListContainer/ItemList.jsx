import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
  return (
    <Grid container>
      {items.map(({ id, title, price, description, img }) => {
        return (
          <Grid item key={id}>
            <ProductCard
              title={title}
              price={price}
              description={description}
              img={img}
              id={id}
            />
          </Grid>
        );
      })}
      {error && <h2>{error.message}</h2>}
    </Grid>
  );
};

export default ItemList;
