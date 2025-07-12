import * as a from "./actionTypes";

const signIn = (login) => {
  return {
    type: a.SIGN_IN,
    payload: login,
  };
};

const logOut = () => {
  return {
    type: a.LOG_OUT,
    payload: "",
  };
};

const register = (data) => {
  return {
    type: a.CREATE_ACCOUNT,
    payload: data,
  };
};

const toggleLike = (payload) => {
  return {
    type: a.TOGGLE_LIKE,
    payload: payload,
  };
};

const addToCart = (payload) => {
  return {
    type: a.ADD_TO_CART,
    payload: payload,
  };
};

export { signIn, logOut, register, toggleLike, addToCart };
