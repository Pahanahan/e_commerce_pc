import * as a from "./actionTypes";

type SortPayload =
  | "Position"
  | "Name"
  | "Price Higher"
  | "Price Lower"
  | "Rating";

interface Filters {
  category?: string;
  price?: string;
  brand?: string;
}

const sortName = (): { type: typeof a.SORT_NAME; payload: SortPayload } => ({
  type: a.SORT_NAME,
  payload: "Name",
});

const sortPosition = (): {
  type: typeof a.SORT_POSITION;
  payload: SortPayload;
} => ({
  type: a.SORT_POSITION,
  payload: "Position",
});

const sortPriceHigher = (): {
  type: typeof a.SORT_PRICE_HIGHER;
  payload: SortPayload;
} => ({
  type: a.SORT_PRICE_HIGHER,
  payload: "Price Higher",
});

const sortPriceLower = (): {
  type: typeof a.SORT_PRICE_LOWER;
  payload: SortPayload;
} => ({
  type: a.SORT_PRICE_LOWER,
  payload: "Price Lower",
});

const sortRating = (): {
  type: typeof a.SORT_RATING;
  payload: SortPayload;
} => ({
  type: a.SORT_RATING,
  payload: "Rating",
});

const showCurrentsProducts = (
  num: string
): { type: typeof a.SHOW_CURRENTS_PRODUCTS; payload: string } => {
  return {
    type: a.SHOW_CURRENTS_PRODUCTS,
    payload: num,
  };
};

const addFilter = (
  type: string,
  value: string
): { type: typeof a.ADD_FILTER; payload: { type: string; value: string } } => ({
  type: a.ADD_FILTER,
  payload: {
    type: type,
    value: value,
  },
});

const deleteFilters = (): { type: typeof a.DELETE_FILTERS } => {
  return {
    type: a.DELETE_FILTERS,
  };
};

const applyFilters = (): { type: typeof a.APPLY_FILTERS } => {
  return {
    type: a.APPLY_FILTERS,
  };
};

const deleteOneFilter = (
  filter: keyof Filters
): { type: typeof a.DELETE_ONE_FILTER; payload: keyof Filters } => {
  return {
    type: a.DELETE_ONE_FILTER,
    payload: filter,
  };
};

const deleteBrandFilter = (
  brand: string
): { type: typeof a.DELETE_BRAND_FILTER; payload: string } => {
  return {
    type: a.DELETE_BRAND_FILTER,
    payload: brand,
  };
};

const changeCurrentPage = (
  num: number | string
): { type: typeof a.CHANGE_CURRENT_PAGE; payload: number | string } => {
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
