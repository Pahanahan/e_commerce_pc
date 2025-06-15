import { useState } from "react";

import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

import styles from "./ProductsMain.module.css";

function ProductsMain() {
  const [categoryActiveIndex, setCategoryActiveIndex] = useState(null);
  const [priceActiveIndex, setPriceActiveIndex] = useState(null);

  return (
    <div className={styles["products-main"]}>
      <div className="container">
        <div className={styles["products-main__inner"]}>
          <LeftSide
            onCategoryActiveIndex={categoryActiveIndex}
            onSetCategoryActiveIndex={setCategoryActiveIndex}
            onPriceActiveIndex={priceActiveIndex}
            onSetPriceActiveIndex={setPriceActiveIndex}
          />
          <RightSide
            onSetCategoryActiveIndex={setCategoryActiveIndex}
            onSetPriceActiveIndex={setPriceActiveIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsMain;
