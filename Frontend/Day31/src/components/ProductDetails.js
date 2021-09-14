import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadProducts } from "../productSlice";
import { addToCart } from "../cartSlice";
import Cart from "./Cart";

const ProductDetails = () => {
  const { id } = useParams();
  const prods = useSelector((state) => state.product.products);
  const [itemVal, setItemVal] = useState(1);
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const item = prods[id - 1];

  return (
    <>
      {item ? (
        <div className="prodDetails">
          <div className="prodPageImage">
            <img
              src={item.image}
              alt="items pics"
              height="500px"
              width="500px"
            />
          </div>

          <div className="prodPageContent">
            <p className="prodPageTitle">{item.title}</p>
            <p className="prodPageDesc">{item.description}</p>
            <p className="prodPagePrice">₹ {item.price}</p>
            <div className="itemValue">
              <button
                id="negative"
                disabled={itemVal < 1}
                onClick={() => {
                  setItemVal(itemVal - 1);
                }}
              >
                -
              </button>
              <div id="totalItemsValue">{itemVal}</div>
              <button id="positive" onClick={() => setItemVal(itemVal + 1)}>
                +
              </button>
            </div>
            <button
              className="addCartButton"
              onClick={() => {
                dispatch(addToCart({ ...item, qty: itemVal }));
                setModalShow(true);
              }}
            >
              Add To Cart
            </button>
          </div>
          <Cart show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      ) : (
        "Please Wait..."
      )}
    </>
  );
};

export default ProductDetails;