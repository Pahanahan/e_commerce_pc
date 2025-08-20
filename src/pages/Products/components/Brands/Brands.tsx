import { useDispatch, useSelector } from "react-redux";

import {
  addFilter,
  deleteBrandFilter,
  applyFilters,
} from "../../../../redux/products/reducers";

import roccat from "../../../../assets/images/partners/roccat-min.png";
import msi from "../../../../assets/images/partners/msi-min.png";
import thermaltake from "../../../../assets/images/partners/thermaltake-min.png";
import adata from "../../../../assets/images/partners/adata-min.png";
import hp from "../../../../assets/images/partners/hp-min.png";
import gigabyte from "../../../../assets/images/partners/gigabyte-min.png";
import styles from "./Brands.module.css";

interface BrandsProps {
  onBrandActiveIndex: number | null;
  onSetBrandActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

interface State {
  products: {
    filtersDraft: {
      brand?: string;
    };
  };
}

function Brands({ onBrandActiveIndex, onSetBrandActiveIndex }: BrandsProps) {
  const haveBrandFilter = useSelector(
    (state: State) => state.products.filtersDraft?.brand
  );
  const filterProductKeys = useSelector(
    (state: State) => state.products.filtersDraft
  );
  const dispatch = useDispatch();

  const brands: [number, string, string][] = [
    [0, "roccat", roccat],
    [1, "MSI", msi],
    [2, "Thermaltake", thermaltake],
    [3, "adata", adata],
    [4, "hp", hp],
    [5, "gigabyte", gigabyte],
  ];

  const handleAddFilterBrand = (brand: string, id: number): void => {
    onSetBrandActiveIndex(id);
    dispatch(addFilter({ type: "brand", value: brand }));
  };

  const handleDeleteFilterBrand = (): void => {
    onSetBrandActiveIndex(null);
    dispatch(deleteBrandFilter());
  };

  const handleApplyFilters = (): void => {
    dispatch(applyFilters());
  };

  const brandsMap = brands.map((item, i) => (
    <div
      onClick={() => handleAddFilterBrand(item[1], i)}
      key={item[0]}
      className={`${styles["brands__item"]} ${
        onBrandActiveIndex === i ? styles["active"] : ""
      }`}
    >
      <img src={item[2]} />
    </div>
  ));

  const notDisabled = Object.keys(filterProductKeys).length > 0;

  return (
    <div className={styles["brands"]}>
      <h2 className={styles["brands__title"]}>Brands</h2>
      <button
        onClick={() => handleDeleteFilterBrand()}
        className={`${styles["brands__show-all"]} ${
          haveBrandFilter ? styles["active"] : ""
        }`}
        disabled={!haveBrandFilter}
      >
        All Brands
      </button>
      <div className={styles["brands__box"]}>{brandsMap}</div>
      <div className={styles["brands__apply-box"]}>
        <button
          onClick={handleApplyFilters}
          className={styles["brands__apply"]}
          disabled={!notDisabled}
        >
          Apply Filters{" "}
          {Object.keys(filterProductKeys).length > 0
            ? Object.keys(filterProductKeys).length
            : ""}
        </button>
      </div>
    </div>
  );
}

export default Brands;
