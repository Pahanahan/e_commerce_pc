import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/reducers";
import { loginReducer } from "./user/reducers";

const store = configureStore({
  reducer: {
    products: productsReducer,
    login: loginReducer,
  },
});

export default store;
