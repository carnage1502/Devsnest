import { Route, Switch } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <Cart />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/:id" component={ProductDetails} />
        </Switch>
      </div>
      <footer>Copyright! &copy; Shivam Sharma</footer>
    </>
  );
};

export default App;