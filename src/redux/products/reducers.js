import * as a from "./actionTypes";
import productsdata from "../../data/products-data.json";

const initialState = {
  allProducts: [...productsdata],
  filtersDraft: {},
  filtersApplied: {},
  sortOption: "Position",
  pageShowProducts: 5,
  currentPage: 1,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.SORT_NAME:
    case a.SORT_POSITION:
    case a.SORT_PRICE_HIGHER:
    case a.SORT_PRICE_LOWER:
    case a.SORT_RATING: {
      return {
        ...state,
        sortOption: action.payload,
        currentPage: 1,
      };
    }

    case a.SHOW_CURRENTS_PRODUCTS: {
      const itemsToShow =
        action.payload === "All"
          ? state.allProducts.length
          : Number(action.payload);
      return {
        ...state,
        pageShowProducts: itemsToShow,
        currentPage: 1,
      };
    }

    case a.ADD_FILTER: {
      return {
        ...state,
        filtersDraft: {
          ...state.filtersDraft,
          [action.payload.type]: action.payload.value,
        },
      };
    }

    case a.DELETE_FILTERS: {
      return {
        ...state,
        filtersDraft: {},
        filtersApplied: {},
        currentPage: 1,
      };
    }

    case a.APPLY_FILTERS: {
      return {
        ...state,
        filtersApplied: state.filtersDraft,
        currentPage: 1,
      };
    }

    case a.DELETE_ONE_FILTER: {
      const deletedFilter = { ...state.filtersApplied };
      delete deletedFilter[action.payload];

      return {
        ...state,
        filtersDraft: deletedFilter,
        filtersApplied: deletedFilter,
        currentPage: 1,
      };
    }

    case a.DELETE_BRAND_FILTER: {
      const updatedDraft = { ...state.filtersDraft };
      const updatedApplied = { ...state.filtersApplied };
      delete updatedDraft.brand;
      delete updatedApplied.brand;

      return {
        ...state,
        filtersDraft: updatedDraft,
        filtersApplied: updatedApplied,
        currentPage: 1,
      };
    }

    case a.CHANGE_CURRENT_PAGE: {
      let newPage;

      if (action.payload === "prev") {
        newPage = state.currentPage - 1;
      } else if (action.payload === "next") {
        newPage = state.currentPage + 1;
      } else {
        newPage = action.payload;
      }

      return {
        ...state,
        currentPage: newPage,
      };
    }

    default:
      return state;
  }
};

export { productsReducer };
