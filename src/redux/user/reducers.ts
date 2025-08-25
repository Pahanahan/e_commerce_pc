import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { User, Login } from "../../types/types";

interface Payload {
  login: string;
  productId: number;
}

const savedData = localStorage.getItem("loginsAndPasswords");

const initialState: Login = savedData
  ? JSON.parse(savedData)
  : {
      isLogedIn: "",
      users: [],
    };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<string>) {
      state.isLogedIn = action.payload;
      saveToLocalStorage(state);
    },
    logOut(state) {
      state.isLogedIn = "";
      saveToLocalStorage(state);
    },
    register(state, action: PayloadAction<Login>) {
      state.isLogedIn = action.payload.isLogedIn;
      state.users = action.payload.users;
      saveToLocalStorage(state);
    },
    toggleLike(state, action: PayloadAction<Payload>) {
      const { login, productId } = action.payload;

      state.users = state.users.map((user: User) => {
        if (user.login !== login) return user;

        const alreadyLiked: boolean = user?.likes.includes(productId);

        return {
          ...user,
          likes: alreadyLiked
            ? user.likes.filter((id: number) => id !== productId)
            : [...user.likes, productId],
        };
      });
      saveToLocalStorage(state);
    },
    addToCart(state, action: PayloadAction<Payload>) {
      const { login, productId } = action.payload;

      state.users = state.users.map((user: User) => {
        if (user.login !== login) return user;

        const alreadyCart: boolean = user?.cart.includes(productId);

        return {
          ...user,
          cart: alreadyCart
            ? user.cart.filter((id) => id !== productId)
            : [...user.cart, productId],
        };
      });
      saveToLocalStorage(state);
    },
  },
});

const saveToLocalStorage = (state: Login): void =>
  localStorage.setItem("loginsAndPasswords", JSON.stringify(state));

export const { signIn, logOut, register, toggleLike, addToCart } =
  loginSlice.actions;

export default loginSlice.reducer;
