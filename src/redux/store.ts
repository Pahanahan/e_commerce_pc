import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./products/reducers";
import { loginReducer } from "./user/reducers";

const store = configureStore({
  reducer: {
    products: productsSlice,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
