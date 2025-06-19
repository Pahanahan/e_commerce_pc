import { useState } from "react";

import Filters from "../Filters/Filters";
import LeftSideBurger from "../LeftSideBurger/LeftSideBurger";

import styles from "./LeftSide.module.css";

function LeftSide({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
  onBrandActiveIndex,
  onSetBrandActiveIndex,
}) {
  const [burgerState, setBurgerState] = useState(true);

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
      />
    </div>
  );
}

export default LeftSide;
