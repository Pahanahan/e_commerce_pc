import * as a from "./actionTypes";

const sortName = () => ({
  type: a.SORT_NAME,
  payload: "Name",
});
const sortPosition = () => ({
  type: a.SORT_POSITION,
  payload: "Position",
});
const sortPriceHigher = () => ({
  type: a.SORT_PRICE_HIGHER,
  payload: "Price Higher",
});
const sortPriceLower = () => ({
  type: a.SORT_PRICE_LOWER,
  payload: "Price Lower",
});
const sortRating = () => ({
  type: a.SORT_RATING,
  payload: "Rating",
});

const showCurrentsProducts = (num) => {
  return {
    type: a.SHOW_CURRENTS_PRODUCTS,
    payload: num,
  };
};
const addFilter = (type, value) => ({
  type: a.ADD_FILTER,
  payload: {
    type: type,
    value: value,
  },
});
const deleteFilters = () => {
  return {
    type: a.DELETE_FILTERS,
  };
};
const applyFilters = () => {
  return {
    type: a.APPLY_FILTERS,
  };
};
const deleteOneFilter = (filter) => {
  return {
    type: a.DELETE_ONE_FILTER,
    payload: filter,
  };
};
const deleteBrandFilter = (brand) => {
  return {
    type: a.DELETE_BRAND_FILTER,
    payload: brand,
  };
};
const changeCurrentPage = (num) => {
  return {
    type: a.CHANGE_CURRENT_PAGE,
    payload: num,
  };
};

export {
  sortName,
  sortPosition,
  sortPriceHigher,
  sortPriceLower,
  sortRating,
  showCurrentsProducts,
  addFilter,
  deleteFilters,
  applyFilters,
  deleteOneFilter,
  deleteBrandFilter,
  changeCurrentPage,
};
