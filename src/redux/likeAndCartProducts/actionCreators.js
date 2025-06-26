import * as a from "./actionTypes";

const addLike = (boolean) => ({
  type: a.ADD_LIKE,
  payload: boolean,
});

const addToCart = (product) => ({
  type: a.ADD_TO_CART,
  payload: product,
});

export { addLike, addToCart };
