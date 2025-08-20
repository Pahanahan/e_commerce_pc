import { createSelector } from "reselect";

import getFilterAndSortedProducts from "../../utils/getFilterAndSortedProducts";

interface Product {
  id: number;
  brand: string;
  category: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  currency: string;
  images: string[];
  rating: number;
}

type FiltersAppliedType = {
  category?: string;
  price?: string;
  brand?: string;
};

type FiltersDraftType = {
  category?: string;
  price?: string;
  brand?: string;
};

type SortOptionType =
  | "Position"
  | "Name"
  | "Price Lower"
  | "Price Higher"
  | "Rating";

interface ProductsState {
  allProducts: Product[];
  filtersApplied: FiltersAppliedType;
  filtersDraft: FiltersDraftType;
  sortOption: SortOptionType;
  currentPage: number;
  pageShowProducts: number;
}

interface RootStateInterface {
  products: ProductsState;
}

const selectAllProducts = (state: RootStateInterface) =>
  state.products.allProducts;
const selectFiltersApplied = (state: RootStateInterface) =>
  state.products.filtersApplied;
const selectSortOption = (state: RootStateInterface) =>
  state.products.sortOption;
const selectCurrentPage = (state: RootStateInterface) =>
  state.products.currentPage;
const selectPageShowProducts = (state: RootStateInterface) =>
  state.products.pageShowProducts;

const selectVisibleProducts = createSelector(
  [
    selectAllProducts,
    selectFiltersApplied,
    selectSortOption,
    selectCurrentPage,
    selectPageShowProducts,
  ],
  (products, filters, sort, currentPage, pageShowProducts) => {
    const filteredProducts = getFilterAndSortedProducts({
      products,
      filters,
      sort,
    });

    const startIndex = (currentPage - 1) * pageShowProducts;
    const endIndex = currentPage * pageShowProducts;

    return filteredProducts.slice(startIndex, endIndex);
  }
);

const selectAllFilteredProducts = createSelector(
  [selectAllProducts, selectFiltersApplied, selectSortOption],
  (products, filters, sort) => {
    const filteredProducts = getFilterAndSortedProducts({
      products,
      filters,
      sort,
    });

    return filteredProducts;
  }
);

const selectVisibleRange = createSelector(
  [
    selectAllProducts,
    selectFiltersApplied,
    selectSortOption,
    selectCurrentPage,
    selectPageShowProducts,
  ],
  (products, filters, sort, currentPage, pageShowProducts) => {
    const filteredProducts = getFilterAndSortedProducts({
      products,
      filters,
      sort,
    });

    const allProductsLength = filteredProducts.length;
    const start = currentPage * pageShowProducts - pageShowProducts + 1;
    const end =
      pageShowProducts * currentPage <= allProductsLength
        ? pageShowProducts * currentPage
        : allProductsLength;

    return {
      length: allProductsLength,
      start: start,
      end: end,
    };
  }
);

const selectorCurrentPage = createSelector(
  [selectCurrentPage],
  (currentPage) => {
    return currentPage;
  }
);

const selectorPageShowProducts = createSelector(
  [selectCurrentPage],
  (pageShowProducts) => {
    return pageShowProducts;
  }
);

export {
  selectVisibleProducts,
  selectAllFilteredProducts,
  selectVisibleRange,
  selectorCurrentPage,
  selectorPageShowProducts,
};
