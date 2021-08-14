import ProductListing from "./components/ProductListing";
import { Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="main">
        <div className="navbars">
          <nav>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <h2>Carnage Redux Cart</h2>
            </Link>

            <div className="icons">
              <i className="fas fa-heart fa-2x" style={{ color: "red" }}></i>
              <i className="fas fa-cart-plus fa-2x"></i>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={ProductListing} />
        </Switch>
      </div>
    </>
  );
};

export default App;