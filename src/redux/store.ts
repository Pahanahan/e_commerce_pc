import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./products/reducers";
import loginSlice from "./user/reducers";

const store = configureStore({
  reducer: {
    products: productsSlice,
    login: loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
