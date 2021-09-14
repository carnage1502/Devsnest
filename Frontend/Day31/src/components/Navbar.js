import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="navbars">
      <nav>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h2>
            Carnage <span style={{ color: "lightseagreen" }}>Redux</span> Cart
          </h2>
        </Link>

        <div className="icons">
          <i className="fas fa-heart fa-2x" style={{ color: "red" }}></i>
          <i
            className="fas fa-cart-plus fa-2x"
            onClick={() => setModalShow(true)}
          ></i>
        </div>
      </nav>

      <Cart show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Navbar;