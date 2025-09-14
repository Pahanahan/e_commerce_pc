import { IoClose } from "react-icons/io5";

import Filters from "../Filters/Filters";

import styles from "./Mobile.module.css";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

interface MobileFiltersProps {
  onCategoryActiveIndex: number | null;
  onSetCategoryActiveIndex: Setter<number | null>;
  onPriceActiveIndex: number | null;
  onSetPriceActiveIndex: Setter<number | null>;
  onBrandActiveIndex: number | null;
  onSetBrandActiveIndex: Setter<number | null>;
  onHasFilters: boolean;
  onSetHasFilters: Setter<boolean>;
}

function MobileFilters({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
  onBrandActiveIndex,
  onSetBrandActiveIndex,
  onHasFilters,
  onSetHasFilters,
}: MobileFiltersProps) {
  return (
    <div className={styles["mobile-filters"]}>
      {onHasFilters ? (
        <>
          <div
            className={styles["mobile-filters__close"]}
            onClick={() => onSetHasFilters(!onHasFilters)}
          >
            <IoClose fontSize={20} />
          </div>
          <Filters
            onCategoryActiveIndex={onCategoryActiveIndex}
            onSetCategoryActiveIndex={onSetCategoryActiveIndex}
            onPriceActiveIndex={onPriceActiveIndex}
            onSetPriceActiveIndex={onSetPriceActiveIndex}
            onBrandActiveIndex={onBrandActiveIndex}
            onSetBrandActiveIndex={onSetBrandActiveIndex}
            onSetHasFilters={onSetHasFilters}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default MobileFilters;
