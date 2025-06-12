import * as a from "./actionTypes";
import productsdata from "../../data/products-data.json";

const initialState = {
  allProducts: [...productsdata],
  visibleProducts: [...productsdata],
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
        visibleProducts: sorted.slice(0, state.visibleProducts.length),
      };
    }

    case a.SORT_POSITION: {
      const sorted = [...state.allProducts].sort((a, b) => a.id - b.id);
      return {
        ...state,
        allProducts: sorted,
        visibleProducts: sorted.slice(0, state.visibleProducts.length),
      };
    }

    case a.SORT_PRICE_HIGHER: {
      const sorted = [...state.allProducts].sort((a, b) => b.price - a.price);
      return {
        ...state,
        allProducts: sorted,
        visibleProducts: sorted.slice(0, state.visibleProducts.length),
      };
    }

    case a.SORT_PRICE_LOWER: {
      const sorted = [...state.allProducts].sort((a, b) => a.price - b.price);
      return {
        ...state,
        allProducts: sorted,
        visibleProducts: sorted.slice(0, state.visibleProducts.length),
      };
    }

    case a.SORT_RATING: {
      const sorted = [...state.allProducts].sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        allProducts: sorted,
        visibleProducts: sorted.slice(0, state.visibleProducts.length),
      };
    }

    case a.SHOW_CURRENTS_PRODUCTS: {
      if (action.payload === "All") {
        return {
          ...state,
          visibleProducts: [...state.allProducts],
        };
      } else {
        const count = Number(action.payload);
        return {
          ...state,
          visibleProducts: [...state.allProducts].slice(0, count),
        };
      }
    }

    default:
      return state;
  }
};

export { productsReducer };
