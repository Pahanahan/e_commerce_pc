// import * as a from "./actionTypes";
// import productsdata from "../../data/products-data.json";
// import getFilterAndSortedProducts from "../../utils/getFilterAndSortedProducts";

// const initialState = {
//   allProducts: [...productsdata],
//   visibleProducts: [...productsdata],
//   allFilteredProducts: [...productsdata],
//   filtersDraft: {},
//   filtersApplied: {},
//   sortOption: "Position",
//   pageShowProducts: 10,
//   currentPage: 1,
// };

// const productsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case a.SORT_NAME:
//     case a.SORT_POSITION:
//     case a.SORT_PRICE_HIGHER:
//     case a.SORT_PRICE_LOWER:
//     case a.SORT_RATING: {
//       const sorted = getFilterAndSortedProducts({
//         products: state.allProducts,
//         filters: state.filtersApplied,
//         sort: action.payload,
//       });

//       return {
//         ...state,
//         allFilteredProducts: sorted,
//         visibleProducts: sorted.slice(0, state.pageShowProducts),
//         sortOption: action.payload,
//         currentPage: 1,
//       };
//     }

//     case a.SHOW_CURRENTS_PRODUCTS: {
//       const itemsToShow =
//         action.payload === "All"
//           ? state.allProducts.length
//           : Number(action.payload);
//       const sorted = getFilterAndSortedProducts({
//         products: state.allProducts,
//         filters: state.filtersApplied,
//         sort: state.sortOption,
//       });
//       return {
//         ...state,
//         allFilteredProducts: sorted,
//         pageShowProducts: itemsToShow,
//         visibleProducts: sorted.slice(0, itemsToShow),
//         currentPage: 1,
//       };
//     }

//     case a.ADD_FILTER: {
//       return {
//         ...state,
//         filtersDraft: {
//           ...state.filtersDraft,
//           [action.payload.type]: action.payload.value,
//         },
//       };
//     }

//     case a.DELETE_FILTERS: {
//       const sorted = getFilterAndSortedProducts({
//         products: state.allProducts,
//         sort: state.sortOption,
//       });
//       return {
//         ...state,
//         allFilteredProducts: sorted,
//         visibleProducts: sorted.slice(0, state.pageShowProducts),
//         filtersDraft: {},
//         filtersApplied: {},
//         currentPage: 1,
//       };
//     }

//     case a.APPLY_FILTERS: {
//       const filteredProducts = getFilterAndSortedProducts({
//         products: state.allProducts,
//         filters: state.filtersDraft,
//         sort: state.sortOption,
//       });

//       const newPageShowProducts =
//         state.allFilteredProducts.length < 10
//           ? 10
//           : state.pageShowProducts / state.currentPage;

//       return {
//         ...state,
//         allFilteredProducts: filteredProducts,
//         pageShowProducts: newPageShowProducts,
//         visibleProducts: filteredProducts.slice(0, state.pageShowProducts),
//         filtersApplied: state.filtersDraft,
//         currentPage: 1,
//       };
//     }

//     case a.DELETE_ONE_FILTER: {
//       const deletedFilter = { ...state.filtersApplied };
//       delete deletedFilter[action.payload];

//       const filteredProducts = getFilterAndSortedProducts({
//         products: state.allProducts,
//         filters: deletedFilter,
//         sort: state.sortOption,
//       });

//       return {
//         ...state,
//         allFilteredProducts: filteredProducts,
//         filtersDraft: deletedFilter,
//         filtersApplied: deletedFilter,
//         visibleProducts: filteredProducts.slice(0, state.pageShowProducts),
//         currentPage: 1,
//       };
//     }

//     case a.DELETE_BRAND_FILTER: {
//       const updatedDraft = { ...state.filtersDraft };
//       const updatedApplied = { ...state.filtersApplied };
//       delete updatedDraft.brand;
//       delete updatedApplied.brand;

//       const filteredProducts = getFilterAndSortedProducts({
//         products: state.allProducts,
//         filters: updatedApplied,
//         sort: state.sortOption,
//       });

//       return {
//         ...state,
//         allFilteredProducts: filteredProducts,
//         filtersDraft: updatedDraft,
//         filtersApplied: updatedApplied,
//         visibleProducts: filteredProducts.slice(0, state.pageShowProducts),
//         currentPage: 1,
//       };
//     }

//     case a.CHANGE_CURRENT_PAGE: {
//       const filteredProducts = getFilterAndSortedProducts({
//         products: state.allProducts,
//         filters: state.filtersApplied,
//         sort: state.sortOption,
//       });

//       let newPage;

//       const maxPage = Math.ceil(
//         state.allFilteredProducts.length / state.pageShowProducts
//       );

//       if (action.payload === "prev") {
//         if (state.currentPage <= 1) return state;
//         newPage = state.currentPage - 1;
//       } else if (action.payload === "next") {
//         if (state.currentPage >= maxPage) return state;
//         newPage = state.currentPage + 1;
//       } else {
//         newPage = action.payload;
//       }

//       const startIndex = (newPage - 1) * state.pageShowProducts;
//       const endIndex = newPage * state.pageShowProducts;

//       return {
//         ...state,
//         visibleProducts: filteredProducts.slice(startIndex, endIndex),
//         currentPage: newPage,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export { productsReducer };

import * as a from "./actionTypes";
import productsdata from "../../data/products-data.json";

const initialState = {
  allProducts: [...productsdata],
  filtersDraft: {},
  filtersApplied: {},
  sortOption: "Position",
  pageShowProducts: 10,
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
      const deleted = { ...state.filtersApplied };
      delete deleted[action.payload];

      return {
        ...state,
        filtersDraft: deleted,
        filtersApplied: deleted,
        currentPage: 1,
      };
    }

    case a.DELETE_BRAND_FILTER: {
      const draft = { ...state.filtersDraft };
      const applied = { ...state.filtersApplied };
      delete draft.brand;
      delete draft.brand;

      return {
        ...state,
        filtersDraft: draft,
        filtersApplied: applied,
        currentPage: 1,
      };
    }

    case a.CHANGE_CURRENT_PAGE: {
      let newPage;

      if (action.payload === "prev" && state.currentPage > 1) {
        newPage = state.currentPage - 1;
      } else if (action.payload === "next") {
        newPage = state.currentPage + 1;
      } else if (typeof action.payload === "number") {
        newPage = action.payload;
      } else {
        return state;
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
