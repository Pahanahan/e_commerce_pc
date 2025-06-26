import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/reducers";
import likeAndCartReducer from "./likeAndCartProducts/reducers";

const store = configureStore({
  reducer: {
    products: productsReducer,
    likeAndCartReducer: likeAndCartReducer,
  },
});

export default store;
