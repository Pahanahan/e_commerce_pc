import { useDispatch, useSelector } from "react-redux";

// import {
//   deleteFilters,
//   deleteOneFilter,
// } from "../../../../redux/products/actionCreators";
import {
  deleteFilters,
  deleteOneFilter,
} from "../../../../redux/products/reducers";
import parseRange from "../../../../utils/parseRange";

import close from "../../../../assets/icons/close.svg";
import styles from "./ActiveSorted.module.css";

interface ActiveSortedProps {
  onSetCategoryActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  onSetPriceActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  onSetBrandActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

interface Product {
  price: number;
  category: string;
  brand: string;
}

interface Filters {
  price?: string;
  category?: string;
  brand?: string;
}

interface State {
  products: {
    allProducts: Product[];
    filtersApplied: {};
  };
  login: {};
}

type PriceRange = [number, number];

enum FiltersEnum {
  PRICE = "price",
  CATEGORY = "category",
  BRAND = "brand",
}

function ActiveSorted({
  onSetCategoryActiveIndex,
  onSetPriceActiveIndex,
  onSetBrandActiveIndex,
}: ActiveSortedProps) {
  const dispatch = useDispatch();
  const allProducts: Product[] = useSelector(
    (state: State) => state.products.allProducts
  );
  const filtersApplied: Filters = useSelector(
    (state: State) => state.products.filtersApplied
  );
  const {
    price: filtersPrice,
    category: filtersCategory,
    brand: filtersBrand,
  } = filtersApplied;

  const priceRange: PriceRange = parseRange(filtersPrice);

  const priceCount = filtersPrice
    ? allProducts.filter(
        (item) => item.price > priceRange[0] && item.price <= priceRange[1]
      ).length
    : null;

  const categoryCount = filtersCategory
    ? allProducts.filter((item) => item.category === filtersCategory).length
    : null;

  const brandCount = filtersBrand
    ? allProducts.filter((item) => item.brand === filtersBrand).length
    : null;

  const activeFilters = [
    { value: FiltersEnum.PRICE, label: filtersPrice, count: priceCount },
    {
      value: FiltersEnum.CATEGORY,
      label: filtersCategory,
      count: categoryCount,
    },
    { value: FiltersEnum.BRAND, label: filtersBrand, count: brandCount },
  ];

  const handleDeleteFilters = (): void => {
    onSetCategoryActiveIndex(null);
    onSetPriceActiveIndex(null);
    onSetBrandActiveIndex(null);
    dispatch(deleteFilters());
  };

  const handleDeleteOneFilter = (filter: FiltersEnum): void => {
    if (filter === FiltersEnum.CATEGORY) {
      onSetCategoryActiveIndex(null);
    } else if (filter === FiltersEnum.PRICE) {
      onSetPriceActiveIndex(null);
    } else if (filter === FiltersEnum.BRAND) {
      onSetBrandActiveIndex(null);
    }
    dispatch(deleteOneFilter(filter));
  };

  const activeFiltersMap = activeFilters.map(
    ({ value, label, count }, i) =>
      label && (
        <div key={i} className={styles["active-sorted__item"]}>
          {label.toUpperCase()}
          <span>{count}</span>
          <button onClick={() => handleDeleteOneFilter(value)}>
            <img src={close} alt="delete filter" />
          </button>
        </div>
      )
  );

  return (
    <div className={styles["active-sorted"]}>
      {activeFiltersMap}
      {activeFilters[0]?.count ||
      activeFilters[1]?.count ||
      activeFilters[2]?.count ? (
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
