import { useDispatch, useSelector } from "react-redux";

import {
  deleteFilters,
  deleteOneFilter,
} from "../../../../redux/products/actionCreators";
import parseRange from "../../../../utils/parseRange";
import styles from "./ActiveSorted.module.css";
import close from "../../../../assets/icons/close.svg";

function ActiveSorted({ onSetCategoryActiveIndex, onSetPriceActiveIndex }) {
  const dispatch = useDispatch();
  const { allProducts, filtersApplied } = useSelector(
    (state) => state.products
  );
  const { price: filtersPrice, category: filtersCategory } = filtersApplied;

  const priceRange = filtersPrice ? parseRange(filtersPrice) : null;

  const priceCount = filtersPrice
    ? allProducts.filter(
        (item) => item.price > priceRange[0] && item.price <= priceRange[1]
      ).length
    : null;

  const categoryCount = filtersCategory
    ? allProducts.filter((item) => item.category === filtersCategory).length
    : null;

  const activeFilters = [
    { value: "price", label: filtersPrice, count: priceCount },
    { value: "category", label: filtersCategory, count: categoryCount },
  ];

  const handleDeleteFilters = () => {
    onSetCategoryActiveIndex(null);
    onSetPriceActiveIndex(null);
    dispatch(deleteFilters());
  };

  const handleDeleteOneFilter = (filter) => {
    if (filter === "category") {
      onSetCategoryActiveIndex(null);
    } else if (filter === "price") {
      onSetPriceActiveIndex(null);
    }
    dispatch(deleteOneFilter(filter));
    console.log(filter);
  };

  const activeFiltersMap = activeFilters.map(
    ({ value, label, count }, i) =>
      label && (
        <div key={i} className={styles["active-sorted__item"]}>
          {label.toUpperCase()}
          <span>{count}</span>
          <button onClick={() => handleDeleteOneFilter(value)}>
            <img src={close} alt="close" />
          </button>
        </div>
      )
  );

  return (
    <div className={styles["active-sorted"]}>
      {activeFiltersMap}
      {activeFilters[0].count || activeFilters[1].count ? (
        <div
          onClick={handleDeleteFilters}
          className={styles["active-sorted__item-clear"]}
        >
          Clear All
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ActiveSorted;
