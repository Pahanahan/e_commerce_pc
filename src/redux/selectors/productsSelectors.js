import { createSelector } from "reselect";

import getFilterAndSortedProducts from "../../utils/getFilterAndSortedProducts";

const selectAllProducts = (state) => state.products.allProducts;
const selectFiltersApplied = (state) => state.products.filtersApplied;
const selectSortOption = (state) => state.products.sortOption;
const selectCurrentPage = (state) => state.products.currentPage;
const selectPageShowProducts = (state) => state.products.pageShowProducts;

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

export { selectVisibleProducts, selectAllFilteredProducts, selectVisibleRange };
