import Card from "./Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../productSlice";

const ProductListing = () => {
  const prods = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div className="allCards">
      {prods.length > 0 ? (
        prods.map((item) => {
          return <Card key={item.id} item={item} />;
        })
      ) : (
        <h4>Please Wait...</h4>
      )}
    </div>
  );
};

export default ProductListing;