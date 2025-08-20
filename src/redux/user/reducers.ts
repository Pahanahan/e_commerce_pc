// import * as a from "./actionTypes";

// interface User {
//   login: string;
//   password: string;
//   likes: number[];
//   cart: number[];
// }

// interface InitialState {
//   isLogedIn: string;
//   users: User[];
// }

// const savedData = localStorage.getItem("loginsAndPasswords");

// const initialState: InitialState = savedData
//   ? JSON.parse(savedData)
//   : {
//       isLogedIn: "",
//       users: [],
//     };

// const loginReducer = (state = initialState, action: any) => {
//   let newState = state;

//   if (action.type === a.SIGN_IN) {
//     newState = {
//       ...state,
//       isLogedIn: action.payload,
//     };
//   }
//   if (action.type === a.LOG_OUT) {
//     newState = {
//       ...state,
//       isLogedIn: "",
//     };
//   }
//   if (action.type === a.CREATE_ACCOUNT) {
//     newState = {
//       ...state,
//       ...action.payload,
//     };
//   }
//   if (action.type === a.TOGGLE_LIKE) {
//     const { login, productId } = action.payload;

//     newState = {
//       ...state,
//       users: state.users.map((user) => {
//         if (user.login !== login) return user;

//         const alreadyLiked = user?.likes.includes(productId);

//         return {
//           ...user,
//           likes: alreadyLiked
//             ? user.likes.filter((id) => id !== productId)
//             : [...user.likes, productId],
//         };
//       }),
//     };
//   }
//   if (action.type === a.ADD_TO_CART) {
// const { login, productId } = action.payload;

// newState = {
//   ...state,
//   users: state.users.map((user) => {
//     if (user.login !== login) return user;

//     const alreadyCart = user?.cart.includes(productId);

//     return {
//       ...user,
//       cart: alreadyCart
//         ? user.cart.filter((id) => id !== productId)
//         : [...user.cart, productId],
//     };
//   }),
//     };
//   }

//   localStorage.setItem("loginsAndPasswords", JSON.stringify(newState));

//   return newState;
// };

// export default loginReducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  login: string;
  password: string;
  likes: number[];
  cart: number[];
}

interface LocalStorageData {
  isLogedIn: string;
  users: User[];
}

interface Payload {
  login: string;
  productId: number;
}

const savedData = localStorage.getItem("loginsAndPasswords");

const initialState = savedData
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
      console.log(action);
      state.isLogedIn = action.payload;
    },
    logOut(state) {
      state.isLogedIn = "";
    },
    register(state, action: PayloadAction<LocalStorageData>) {
      console.log(action);
      state.isLogedIn = action.payload.isLogedIn;
      state.users = action.payload.users;
    },
    toggleLike(state, action: PayloadAction<Payload>) {
      console.log(action);
      const { login, productId } = action.payload;

      state.users.map((user: User) => {
        if (user.login !== login) return user;

        const alreadyLiked: boolean = user?.likes.includes(productId);

        return {
          ...user,
          likes: alreadyLiked
            ? user.likes.filter((id: number) => id !== productId)
            : [...user.likes, productId],
        };
      });
    },
    addToCart(state, action: PayloadAction<Payload>) {
      console.log(action);
      const { login, productId } = action.payload;

      state.users.map((user: User) => {
        if (user.login !== login) return user;

        const alreadyCart = user?.cart.includes(productId);

        return {
          ...user,
          cart: alreadyCart
            ? user.cart.filter((id) => id !== productId)
            : [...user.cart, productId],
        };
      });
    },
  },
});

export const { signIn, logOut, register, toggleLike, addToCart } =
  loginSlice.actions;

export default loginSlice.reducer;
