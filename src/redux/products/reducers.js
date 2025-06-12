import * as a from "./actionTypes";
import productsdata from "../../data/products-data.json";

const initialState = [...productsdata];

const productsReducer = (state = initialState, action) => {
  if (action.type === a.SORT_NAME) {
    return [...state].sort((a, b) => a.title.localeCompare(b.title));
  }
  if (action.type === a.SORT_POSITION) {
    return [...state].sort((a, b) => a.id - b.id);
  }
  if (action.type === a.SORT_PRICE_HIGHER) {
    return [...state].sort((a, b) => b.price - a.price);
  }
  if (action.type === a.SORT_PRICE_LOWER) {
    return [...state].sort((a, b) => a.price - b.price);
  }
  if (action.type === a.SORT_RATING) {
    return [...state].sort((a, b) => b.rating - a.rating);
  }

  return state;
};

export { productsReducer };
