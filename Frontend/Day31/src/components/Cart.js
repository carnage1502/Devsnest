import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adjustQty } from "../cartSlice";
import { loadProducts } from "../productSlice";

const Cart = (props) => {
  const allItemsInCart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Items
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allItemsInCart.length > 0
            ? allItemsInCart.map((cartItems) => {
                return (
                  <div key={cartItems.id}>
                    <div className="cartCard">
                      <img
                        src={cartItems.image}
                        alt="items pics"
                        height="100px"
                        width="100px"
                      />
                      <div>
                        <p className="cartItemTitle">{cartItems.title}</p>
                        <div className="cartItemValue">
                          <button
                            id="cartNegative"
                            disabled={cartItems.qty < 1}
                            onClick={() => {
                              dispatch(
                                adjustQty({ id: cartItems.id, qty: -1 })
                              );
                            }}
                          >
                            -
                          </button>
                          <div id="cartTotalItemsValue">{cartItems.qty}</div>
                          <button
                            id="cartPositive"
                            onClick={() => {
                              dispatch(adjustQty({ id: cartItems.id, qty: 1 }));
                            }}
                          >
                            +
                          </button>
                        </div>
                        <p className="cartItemPrice">
                          Price: ₹ {cartItems.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            : "No Items"}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Cart;