import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RiArrowDropLeftLine } from "react-icons/ri";
import {
  addFilter,
  deleteFilters,
  applyFilters,
} from "../../../../redux/products/actionCreators";

import arrowUp from "../../../../assets/icons/arrow-up.svg";
import styles from "./Filter.module.css";

function Filter({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
}) {
  const products = useSelector((state) => state.products.allProducts);
  const filterProductKeys = useSelector((state) => state.products.filtersDraft);

  const dispatch = useDispatch();

  const priceRanges = [
    { max: 500, label: "$0.00 - $500.00" },
    { max: 1000, label: "$500.00 - $1000.00" },
    { max: 2000, label: "$1000.00 - $2000.00" },
    { max: 3000, label: "$2000.00 - $3000.00" },
    { max: 4000, label: "$3000.00 - $4000.00" },
    { max: 5000, label: "$4000.00 - $5000.00" },
    { max: 6000, label: "$5000.00 - $6000.00" },
    { max: 7000, label: "$6000.00 - $7000.00" },
    { max: Infinity, label: "$7000.00 And Above" },
  ];

  const pricesCount = {};

  products.forEach((item) => {
    if (!item.price) return;

    const range = priceRanges.find((r) => item.price <= r.max);

    if (range) {
      pricesCount[range.label] = (pricesCount[range.label] || 0) + 1;
    }
  });

  const sortedPricesCount = Object.entries(pricesCount).sort(
    (a, b) =>
      Number(a[0].split("-")[0].slice(1)) - Number(b[0].split("-")[0].slice(1))
  );

  const handleFilterPrice = (label, id) => {
    onSetPriceActiveIndex(id);
    dispatch(addFilter("price", label));
  };

  const pricesCountMap = sortedPricesCount.map(([label, count], i) => (
    <div
      onClick={() => handleFilterPrice(label, i)}
      key={label}
      data-price={label}
      className={`${styles["filter__box-item"]} ${
        onPriceActiveIndex === i ? styles["active"] : ""
      }`}
    >
      <div>{label}</div>
      <div>{count}</div>
    </div>
  ));

  const categoriesCount = {};

  products.forEach((item) => {
    if (!item.category) return;

    if (categoriesCount[item.category]) {
      categoriesCount[item.category] += 1;
    } else {
      categoriesCount[item.category] = 1;
    }
  });

  const sortedCategoriesCount = Object.entries(categoriesCount).sort(
    (a, b) => b[1] - a[1]
  );

  const handleAddFilterCategory = (category, id) => {
    onSetCategoryActiveIndex(id);
    dispatch(addFilter("category", category));
  };

  const categoriesCountMap = sortedCategoriesCount.map(
    ([category, count], i) => (
      <div
        onClick={() => handleAddFilterCategory(category, i)}
        key={category}
        data-category={category}
        className={`${styles["filter__box-item"]} ${
          onCategoryActiveIndex === i ? styles["active"] : ""
        }`}
      >
        <div>{category.toLocaleUpperCase()}</div>
        <div>{count}</div>
      </div>
    )
  );

  const handleDeleteFilters = () => {
    onSetCategoryActiveIndex(null);
    onSetPriceActiveIndex(null);
    dispatch(deleteFilters());
  };

  const handleApplyFilters = () => {
    dispatch(applyFilters());
  };

  return (
    <>
      <div className={styles["filter-back"]}>
        <RiArrowDropLeftLine />
        <span>Back</span>
      </div>
      <div className={styles["filter"]}>
        <h2 className={styles["filter__title"]}>Filters</h2>
        <button
          onClick={handleDeleteFilters}
          disabled={!Object.keys(filterProductKeys).length > 0}
          className={styles["filter__clear-btn"]}
        >
          Clear Filters
        </button>
        <div className={styles["filter__box"]}>
          <div className={styles["filter__box-item__title"]}>
            <h3>Category</h3>
            <img src={arrowUp} alt="arrow" />
          </div>
          {categoriesCountMap}
        </div>
        <div className={styles["filter__box"]}>
          <div className={styles["filter__box-item__title"]}>
            <h3>Price</h3>
            <img src={arrowUp} alt="arrow" />
          </div>
          {pricesCountMap}
        </div>
        <button
          onClick={handleApplyFilters}
          className={styles["filter__apply"]}
          disabled={!Object.keys(filterProductKeys).length > 0}
        >
          Apply Filters{" "}
          {Object.keys(filterProductKeys).length > 0
            ? Object.keys(filterProductKeys).length
            : ""}
        </button>
      </div>
    </>
  );
}

export default Filter;
