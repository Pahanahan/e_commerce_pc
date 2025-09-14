import { useState } from "react";

import Filters from "../Filters/Filters";
import LeftSideBurger from "../LeftSideBurger/LeftSideBurger";

import styles from "./LeftSide.module.css";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

interface LeftSideProps {
  onCategoryActiveIndex: number | null;
  onSetCategoryActiveIndex: Setter<number | null>;
  onPriceActiveIndex: number | null;
  onSetPriceActiveIndex: Setter<number | null>;
  onBrandActiveIndex: number | null;
  onSetBrandActiveIndex: Setter<number | null>;
  onSetHasFilters: Setter<boolean>;
}

function LeftSide({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
  onBrandActiveIndex,
  onSetBrandActiveIndex,
  onSetHasFilters,
}: LeftSideProps) {
  const [burgerState, setBurgerState] = useState<boolean>(true);

  return (
    <div
      className={`${styles["left"]} ${
        !burgerState ? styles["left--hidden"] : ""
      }`}
    >
      <LeftSideBurger
        onBurgerState={burgerState}
        onSetBurgerState={setBurgerState}
      />
      <Filters
        onCategoryActiveIndex={onCategoryActiveIndex}
        onSetCategoryActiveIndex={onSetCategoryActiveIndex}
        onPriceActiveIndex={onPriceActiveIndex}
        onSetPriceActiveIndex={onSetPriceActiveIndex}
        onBrandActiveIndex={onBrandActiveIndex}
        onSetBrandActiveIndex={onSetBrandActiveIndex}
        onBurgerState={burgerState}
        onSetHasFilters={onSetHasFilters}
      />
    </div>
  );
}

export default LeftSide;
