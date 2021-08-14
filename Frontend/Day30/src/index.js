import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productSlice from "./productSlice";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);