import * as a from "./actionTypes";
import productsdata from "../../data/products-data.json";
import getFilterAndSortedProducts from "../../utils/getFilterAndSortedProducts";

const initialState = {
  allProducts: [...productsdata],
  visibleProducts: [...productsdata],
  itemsToShow: productsdata.length,
  filtersDraft: {},
  filtersApplied: {},
  sortOption: "Position",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.SORT_NAME:
    case a.SORT_POSITION:
    case a.SORT_PRICE_HIGHER:
    case a.SORT_PRICE_LOWER:
    case a.SORT_RATING: {
      const sorted = getFilterAndSortedProducts({
        products: state.allProducts,
        filters: state.filtersApplied,
        sort: action.payload,
      });

      return {
        ...state,
        visibleProducts: sorted.slice(0, state.itemsToShow),
        sortOption: action.payload,
      };
    }

    case a.SHOW_CURRENTS_PRODUCTS: {
      const itemsToShow =
        action.payload === "All"
          ? state.allProducts.length
          : Number(action.payload);
      const sorted = getFilterAndSortedProducts({
        products: state.allProducts,
        filters: state.filtersApplied,
        sort: state.sortOption,
      });
      return {
        ...state,
        itemsToShow,
        visibleProducts: sorted.slice(0, itemsToShow),
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
      const sorted = getFilterAndSortedProducts({
        products: state.allProducts,
        sort: state.sortOption,
      });
      return {
        ...state,
        visibleProducts: sorted.slice(0, state.itemsToShow),
        filtersDraft: {},
        filtersApplied: {},
      };
    }

    case a.APPLY_FILTERS: {
      const filteredProducts = getFilterAndSortedProducts({
        products: state.allProducts,
        filters: state.filtersDraft,
        sort: state.sortOption,
      });

      return {
        ...state,
        visibleProducts: filteredProducts.slice(0, state.itemsToShow),
        filtersApplied: state.filtersDraft,
      };
    }

    case a.DELETE_ONE_FILTER: {
      const deletedFilter = JSON.parse(JSON.stringify(state.filtersApplied));
      delete deletedFilter[action.payload];

      const filteredProducts = getFilterAndSortedProducts({
        products: state.allProducts,
        filters: deletedFilter,
        sort: state.sortOption,
      });

      return {
        ...state,
        filtersDraft: deletedFilter,
        filtersApplied: deletedFilter,
        visibleProducts: filteredProducts.slice(0, state.itemsToShow),
      };
    }

    case a.ADD_BRAND_FILTER: {
      const filteredProducts = getFilterAndSortedProducts({
        products: state.allProducts,
        filters: {
          ...state.filtersDraft,
          ...state.filtersApplied,
          brand: action.payload,
        },
        sort: state.sortOption,
      });

      return {
        ...state,
        filtersDraft: { ...state.filtersApplied, brand: action.payload },
        filtersApplied: { ...state.filtersApplied, brand: action.payload },
        visibleProducts: filteredProducts.slice(0, state.itemsToShow),
      };
    }

    case a.DELETE_BRAND_FILTER: {
      const filtersWithoutBrandsDraft = { ...state.filtersDraft };
      const filtersWithoutBrandsApplied = { ...state.filtersDraft };
      delete filtersWithoutBrandsDraft[action.payload];
      delete filtersWithoutBrandsApplied[action.payload];

      const filteredProducts = getFilterAndSortedProducts({
        products: state.allProducts,
        filters: {
          filtersWithoutBrandsDraft,
          filtersWithoutBrandsApplied,
        },
        sort: state.sortOption,
      });

      return {
        ...state,
        filtersDraft: filtersWithoutBrandsDraft,
        filtersApplied: filtersWithoutBrandsApplied,
        visibleProducts: filteredProducts.slice(0, state.itemsToShow),
      };
    }

    default:
      return state;
  }
};

export { productsReducer };
