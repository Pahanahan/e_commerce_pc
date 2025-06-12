import * as a from "./actionTypes";

const sortName = () => ({ type: a.SORT_NAME });
const sortPosition = () => ({ type: a.SORT_POSITION });
const sortPriceHigher = () => ({ type: a.SORT_PRICE_HIGHER });
const sortPriceLower = () => ({ type: a.SORT_PRICE_LOWER });
const sortRating = () => ({ type: a.SORT_RATING });

const showCurrentsProducts = (num) => {
  return {
    type: a.SHOW_CURRENTS_PRODUCTS,
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
};
