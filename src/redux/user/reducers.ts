import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { User, Login, UserCart } from "../../types/types";

interface Payload {
  login: string;
  productId: number;
}

interface PayloadWithQuantity {
  login: string;
  productId: number;
  quantity: number;
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

        const existingItem = user.cart.find((item) => item.id === productId);

        let newCart: UserCart[];

        if (existingItem) {
          newCart = [...user.cart];
          newCart = user.cart.filter((item) => item.id !== productId);
        } else {
          newCart = [...user.cart, { id: productId, quantity: 1 }];
        }

        return {
          ...user,
          cart: newCart,
        };
      });
      saveToLocalStorage(state);
    },
    incrementCartItem(state, action: PayloadAction<PayloadWithQuantity>) {
      const { login, productId, quantity } = action.payload;

      state.users = state.users.map((user: User) => {
        if (user.login !== login) return user;

        const existingItem = user.cart.find((item) => item.id === productId);

        let newCart: UserCart[];

        if (existingItem) {
          if (quantity > 0) {
            newCart = user.cart.map((item) =>
              item.id === productId ? { ...item, quantity: quantity } : item
            );
          } else {
            newCart = user.cart.filter((item) => item.id !== productId);
          }
        } else {
          if (quantity > 0) {
            newCart = [...user.cart, { id: productId, quantity: quantity }];
          } else {
            newCart = [...user.cart];
          }
        }

        return {
          ...user,
          cart: newCart,
        };
      });
      saveToLocalStorage(state);
    },
  },
});

const saveToLocalStorage = (state: Login): void =>
  localStorage.setItem("loginsAndPasswords", JSON.stringify(state));

export const {
  signIn,
  logOut,
  register,
  toggleLike,
  addToCart,
  incrementCartItem,
} = loginSlice.actions;

export default loginSlice.reducer;
