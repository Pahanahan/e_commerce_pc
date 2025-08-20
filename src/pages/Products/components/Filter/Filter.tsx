import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addFilter, deleteFilters } from "../../../../redux/products/reducers";
import { RootState } from "../../../../redux/store";
import accordion from "../../../../utils/accordion";

import arrowUp from "../../../../assets/icons/arrow-up.svg";
import styles from "./Filter.module.css";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

interface FiltersProps {
  onCategoryActiveIndex: number | null;
  onSetCategoryActiveIndex: Setter<number | null>;
  onPriceActiveIndex: number | null;
  onSetPriceActiveIndex: Setter<number | null>;
  onSetBrandActiveIndex: Setter<number | null>;
}

interface Product {
  price: number;
  category: string;
}

type FiltersDraft = {
  price?: string;
  category?: string;
  brand?: string;
};

type Range =
  | {
      max: number;
      label: string;
    }
  | undefined;

type ObjectCount = Record<string, number>;

enum PriceOrCategory {
  PRICE = "price",
  CATEGORY = "category",
}

function Filter({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
  onSetBrandActiveIndex,
}: FiltersProps) {
  const [stateCategoryAccordion, setStateCategoryAccordion] =
    useState<boolean>(true);
  const [statePriceAccordion, setStatePriceAccordion] = useState<boolean>(true);
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const priceRef = useRef<HTMLDivElement | null>(null);
  const imgCategoryRef = useRef<HTMLImageElement | null>(null);
  const imgPriceRef = useRef<HTMLImageElement | null>(null);
  const products: Product[] = useSelector(
    (state: RootState) => state.products.allProducts
  );
  const filterProductKeys: FiltersDraft = useSelector(
    (state: RootState) => state.products.filtersDraft
  );

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

  const pricesCount: ObjectCount = {};

  products.forEach((item) => {
    if (!item.price) return;

    const range: Range = priceRanges.find((r) => item.price <= r.max);

    if (!range) return;

    pricesCount[range.label] = (pricesCount[range.label] ?? 0) + 1;
  });

  const sortedPricesCount: [string, number][] = Object.entries(
    pricesCount
  ).sort((a, b) => {
    return (
      Number(a[0].split("-")[0]?.slice(1)) -
      Number(b[0].split("-")[0]?.slice(1))
    );
  });

  const handleFilterPrice = (label: string, id: number): void => {
    onSetPriceActiveIndex(id);
    dispatch(addFilter({ type: PriceOrCategory.PRICE, value: label }));
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

  const categoriesCount: ObjectCount = {};

  products.forEach(({ category }) => {
    if (category) {
      categoriesCount[category] = (categoriesCount[category] ?? 0) + 1;
    }
  });

  const sortedCategoriesCount = Object.entries(categoriesCount).sort(
    (a, b) => b[1] - a[1]
  );

  const handleAddFilterCategory = (category: string, id: number): void => {
    onSetCategoryActiveIndex(id);
    dispatch(addFilter({ type: PriceOrCategory.CATEGORY, value: category }));
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

  const notDisabled: boolean = Object.keys(filterProductKeys).length > 0;

  return (
    <>
      <div className={styles["filter"]}>
        <h2 className={styles["filter__title"]}>Filters</h2>
        <button
          onClick={handleDeleteFilters}
          disabled={!notDisabled}
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
