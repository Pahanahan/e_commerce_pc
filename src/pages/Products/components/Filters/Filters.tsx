import Filter from "../Filter/Filter";
import Brands from "../Brands/Brands";
import MyWishList from "../MyWishList/MyWishList";

import promo from "../../../../assets/images/promo/chair.jpg";
import styles from "./Filters.module.css";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

interface FiltersProps {
  onCategoryActiveIndex: number | null;
  onSetCategoryActiveIndex: Setter<number | null>;
  onPriceActiveIndex: number | null;
  onSetPriceActiveIndex: Setter<number | null>;
  onBrandActiveIndex: number | null;
  onSetBrandActiveIndex: Setter<number | null>;
  onBurgerState?: boolean;
  onSetHasFilters: Setter<boolean>;
}

function Filters({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
  onBrandActiveIndex,
  onSetBrandActiveIndex,
  onBurgerState,
  onSetHasFilters,
}: FiltersProps) {
  return (
    <div
      className={`${styles["filters"]} ${
        !onBurgerState ? styles["filters--hide"] : ""
      }`}
    >
      <Filter
        onCategoryActiveIndex={onCategoryActiveIndex}
        onSetCategoryActiveIndex={onSetCategoryActiveIndex}
        onPriceActiveIndex={onPriceActiveIndex}
        onSetPriceActiveIndex={onSetPriceActiveIndex}
        onSetBrandActiveIndex={onSetBrandActiveIndex}
      />
      <Brands
        onBrandActiveIndex={onBrandActiveIndex}
        onSetBrandActiveIndex={onSetBrandActiveIndex}
        onSetHasFilters={onSetHasFilters}
      />
      <MyWishList />
      <div className={styles["promo"]}>
        <img src={promo} alt="chair" />
      </div>
    </div>
  );
}

export default Filters;
