import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFilter,
  deleteFilters,
} from "../../../../redux/products/actionCreators";
import accordion from "../../../../utils/accordion";

import arrowUp from "../../../../assets/icons/arrow-up.svg";
import styles from "./Filter.module.css";

function Filter({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
  onSetBrandActiveIndex,
}) {
  const [stateCategoryAccordion, setStateCategoryAccordion] = useState(true);
  const [statePriceAccordion, setStatePriceAccordion] = useState(true);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  const imgCategoryRef = useRef(null);
  const imgPriceRef = useRef(null);
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
    onSetBrandActiveIndex(null);
    dispatch(deleteFilters());
  };

  return (
    <>
      <div className={styles["filter"]}>
        <h2 className={styles["filter__title"]}>Filters</h2>
        <button
          onClick={handleDeleteFilters}
          disabled={!Object.keys(filterProductKeys).length > 0}
          className={styles["filter__clear-btn"]}
        >
          Clear Filters
        </button>
        <div>
          <div
            onClick={() =>
              accordion(
                stateCategoryAccordion,
                setStateCategoryAccordion,
                imgCategoryRef
              )
            }
            className={styles["filter__box-accordion"]}
          >
            <h3 className={styles["filter__box-title"]}>Category</h3>
            <img
              ref={imgCategoryRef}
              className={styles["filter__img"]}
              src={arrowUp}
              alt="arrow"
            />
          </div>
          <div className={styles["filter__box"]}>
            <div
              ref={categoryRef}
              className={`${styles["filter__box-accordion-items"]} ${
                stateCategoryAccordion
                  ? styles["filter__box-accordion-items--open"]
                  : ""
              }`}
            >
              {categoriesCountMap}
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() =>
              accordion(
                statePriceAccordion,
                setStatePriceAccordion,
                imgPriceRef
              )
            }
            className={styles["filter__box-accordion"]}
          >
            <h3 className={styles["filter__box-title"]}>Price</h3>
            <img
              ref={imgPriceRef}
              className={styles["filter__img"]}
              src={arrowUp}
              alt="arrow"
            />
          </div>
          <div className={styles["filter__box"]}>
            <div
              ref={priceRef}
              className={`${styles["filter__box-accordion-items"]} ${
                statePriceAccordion
                  ? styles["filter__box-accordion-items--open"]
                  : ""
              }`}
            >
              {pricesCountMap}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
