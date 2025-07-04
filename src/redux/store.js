import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/reducers";
import { loginReducer } from "./user/reducers";
import likeAndCartReducer from "./likeAndCartProducts/reducers";

const store = configureStore({
  reducer: {
    products: productsReducer,
    likeAndCartReducer: likeAndCartReducer,
    login: loginReducer,
  },
});

export default store;
