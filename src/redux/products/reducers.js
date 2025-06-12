import * as a from "./actionTypes";
import productsdata from "../../data/products-data.json";

const initialState = {
  allProducts: [...productsdata],
  visibleProducts: [...productsdata],
  itemsToShow: productsdata.length,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.SORT_NAME: {
      const sorted = [...state.allProducts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return {
        ...state,
        allProducts: sorted,
        visibleProducts: sorted.slice(0, state.itemsToShow),
      };
    }

    case a.SORT_POSITION: {
      const sorted = [...state.allProducts].sort((a, b) => a.id - b.id);
      return {
        ...state,
        allProducts: sorted,
        visibleProducts: sorted.slice(0, state.itemsToShow),
      };
    }

    case a.SORT_PRICE_HIGHER: {
      const sorted = [...state.allProducts].sort((a, b) => b.price - a.price);
      return {
        ...state,
        allProducts: sorted,
        visibleProducts: sorted.slice(0, state.itemsToShow),
      };
    }

    case a.SORT_PRICE_LOWER: {
      const sorted = [...state.allProducts].sort((a, b) => a.price - b.price);
      return {
        ...state,
        allProducts: sorted,
        visibleProducts: sorted.slice(0, state.itemsToShow),
      };
    }

    case a.SORT_RATING: {
      const sorted = [...state.allProducts].sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        allProducts: sorted,
        visibleProducts: sorted.slice(0, state.itemsToShow),
      };
    }

    case a.SHOW_CURRENTS_PRODUCTS: {
      const itemsToShow =
        action.payload === "All"
          ? state.allProducts.length
          : Number(action.payload);
      return {
        ...state,
        itemsToShow,
        visibleProducts: [...state.allProducts].slice(0, itemsToShow),
      };
    }

    default:
      return state;
  }
};

export { productsReducer };
