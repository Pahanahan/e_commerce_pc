import getFilterAndSortedProducts from "../../utils/getFilterAndSortedProducts";

const selectAllProducts = (state) => state.products.allProducts;

const selectFilteredSortedProducts = (state) => {
  const { allProducts, filtersApplied, sortOption } = state.products;
  return getFilterAndSortedProducts({
    products: allProducts,
    filters: filtersApplied,
    sort: sortOption,
  });
};

const selectVisibleProducts = (state) => {
  const { currentPage, pageShowProducts } = state.products;
  const filtered = selectFilteredSortedProducts(state);
  const start = (currentPage - 1) * pageShowProducts;
  const end = currentPage * pageShowProducts;
  return filtered.slice(start, end);
};

const selectTotalPages = (state) => {
  const { pageShowProducts } = state.products;
  const total = selectFilteredSortedProducts(state).length;
  return Math.ceil(total / pageShowProducts);
};

export {
  selectAllProducts,
  selectFilteredSortedProducts,
  selectVisibleProducts,
  selectTotalPages,
};
