import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import productsdata from "../../data/products-data.json";
import { NewPage } from "../../types/types";
import { Product, Filters, SortOptionsEnum } from "../../types/types";

export interface ProductsState {
  allProducts: Product[];
  filtersDraft: Filters;
  filtersApplied: Filters;
  sortOption: string;
  pageShowProducts: number;
  currentPage: number;
}

const initialState: ProductsState = {
  allProducts: [...productsdata],
  filtersDraft: {},
  filtersApplied: {},
  sortOption: "Position",
  pageShowProducts: 10,
  currentPage: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortByValue(state, action: PayloadAction<SortOptionsEnum>) {
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
