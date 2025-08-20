import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import * as a from "./actionTypes";
// import * as actions from "./actionCreators";
import productsdata from "../../data/products-data.json";

// type ProductsAction =
//   | ReturnType<typeof actions.sortName>
//   | ReturnType<typeof actions.sortPosition>
//   | ReturnType<typeof actions.sortPriceHigher>
//   | ReturnType<typeof actions.sortPriceLower>
//   | ReturnType<typeof actions.sortRating>
//   | ReturnType<typeof actions.showCurrentsProducts>
//   | ReturnType<typeof actions.addFilter>
//   | ReturnType<typeof actions.deleteFilters>
//   | ReturnType<typeof actions.applyFilters>
//   | ReturnType<typeof actions.deleteOneFilter>
//   | ReturnType<typeof actions.deleteBrandFilter>
//   | ReturnType<typeof actions.changeCurrentPage>;

interface Product {
  id: number;
  brand: string;
  category: string;
  price: number;
}

export interface Filters {
  category?: string;
  price?: string;
  brand?: string;
}

export interface ProductsState {
  allProducts: Product[];
  filtersDraft: Filters;
  filtersApplied: Filters;
  sortOption: string;
  pageShowProducts: number;
  currentPage: number;
}

export enum SortOptions {
  POSITION = "Position",
  NAME = "Name",
  PRICE_HIGHER = "Price Higher",
  PRICE_LOWER = "Price Lower",
  RATING = "Rating",
}

export enum NewPage {
  NEXT = "next",
  PREV = "prev",
  DOTS = "...",
}

const initialState: ProductsState = {
  allProducts: [...productsdata],
  filtersDraft: {},
  filtersApplied: {},
  sortOption: "Position",
  pageShowProducts: 10,
  currentPage: 1,
};

// type ProductsState = typeof initialState;

// const productsReducer = (
//   state: InitialState = initialState,
//   action: ProductsAction
// ) => {
//   switch (action.type) {
//     case a.SORT_NAME:
//     case a.SORT_POSITION:
//     case a.SORT_PRICE_HIGHER:
//     case a.SORT_PRICE_LOWER:
//     case a.SORT_RATING: {
//       return {
//         ...state,
//         sortOption: action.payload,
//         currentPage: 1,
//       };
//     }

//     case a.SHOW_CURRENTS_PRODUCTS: {
//       const itemsToShow =
//         action.payload === "All"
//           ? state.allProducts.length
//           : Number(action.payload);
//       return {
//         ...state,
//         pageShowProducts: itemsToShow,
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
//       return {
//         ...state,
//         filtersDraft: {},
//         filtersApplied: {},
//         currentPage: 1,
//       };
//     }

//     case a.APPLY_FILTERS: {
//       return {
//         ...state,
//         filtersApplied: state.filtersDraft,
//         currentPage: 1,
//       };
//     }

//     case a.DELETE_ONE_FILTER: {
//       const deletedFilter = { ...state.filtersApplied };
//       delete deletedFilter[action.payload];

//       return {
//         ...state,
//         filtersDraft: deletedFilter,
//         filtersApplied: deletedFilter,
//         currentPage: 1,
//       };
//     }

//     case a.DELETE_BRAND_FILTER: {
//       const updatedDraft = { ...state.filtersDraft };
//       const updatedApplied = { ...state.filtersApplied };
//       delete updatedDraft.brand;
//       delete updatedApplied.brand;

//       return {
//         ...state,
//         filtersDraft: updatedDraft,
//         filtersApplied: updatedApplied,
//         currentPage: 1,
//       };
//     }

//     case a.CHANGE_CURRENT_PAGE: {
//       let newPage: number;

//       if (action.payload === NewPage.PREV) {
//         newPage = state.currentPage - 1;
//       } else if (action.payload === NewPage.NEXT) {
//         newPage = state.currentPage + 1;
//       } else {
//         newPage = Number(action.payload);
//       }

//       return {
//         ...state,
//         currentPage: newPage,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export { productsReducer };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortByValue(state, action: PayloadAction<SortOptions>) {
      state.sortOption = action.payload;
      state.currentPage = 1;
    },
    showCurrentsProducts(state, action: PayloadAction<number | string>) {
      const itemsToShow =
        action.payload === "All"
          ? state.allProducts.length
          : Number(action.payload);
      state.pageShowProducts = itemsToShow;
      state.currentPage = 1;
    },
    addFilter(
      state,
      action: PayloadAction<{ type: keyof Filters; value: string }>
    ) {
      state.filtersDraft[action.payload.type] = action.payload.value;
    },
    deleteFilters(state) {
      state.filtersDraft = {};
      state.filtersApplied = {};
      state.currentPage = 1;
    },
    applyFilters(state) {
      state.filtersApplied = state.filtersDraft;
      state.currentPage = 1;
    },
    deleteOneFilter(state, action: PayloadAction<keyof Filters>) {
      const deletedFilter = { ...state.filtersApplied };
      delete deletedFilter[action.payload];

      state.filtersDraft = deletedFilter;
      state.filtersApplied = deletedFilter;
      state.currentPage = 1;
    },
    deleteBrandFilter(state) {
      const updatedDraft = { ...state.filtersDraft };
      const updatedApplied = { ...state.filtersApplied };
      delete updatedDraft.brand;
      delete updatedApplied.brand;

      state.filtersDraft = updatedDraft;
      state.filtersApplied = updatedApplied;
      state.currentPage = 1;
    },
    changeCurrentPage(state, action: PayloadAction<NewPage | number>) {
      let newPage: number;

      if (action.payload === NewPage.PREV) {
        newPage = state.currentPage - 1;
      } else if (action.payload === NewPage.NEXT) {
        newPage = state.currentPage + 1;
      } else {
        newPage = Number(action.payload);
      }

      state.currentPage = newPage;
    },
  },
});

export const {
  sortByValue,
  showCurrentsProducts,
  addFilter,
  deleteFilters,
  applyFilters,
  deleteOneFilter,
  deleteBrandFilter,
  changeCurrentPage,
} = productsSlice.actions;

export default productsSlice.reducer;
