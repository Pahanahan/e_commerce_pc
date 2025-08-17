import { useState } from "react";

import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

import styles from "./ProductsMain.module.css";

function ProductsMain() {
  const [categoryActiveIndex, setCategoryActiveIndex] = useState<number | null>(
    null
  );
  const [priceActiveIndex, setPriceActiveIndex] = useState<number | null>(null);
  const [brandActiveIndex, setBrandActiveIndex] = useState<number | null>(null);

  return (
    <div className={styles["products-main"]}>
      <div className="container">
        <div className={styles["products-main__inner"]}>
          <LeftSide
            onCategoryActiveIndex={categoryActiveIndex}
            onSetCategoryActiveIndex={setCategoryActiveIndex}
            onPriceActiveIndex={priceActiveIndex}
            onSetPriceActiveIndex={setPriceActiveIndex}
            onBrandActiveIndex={brandActiveIndex}
            onSetBrandActiveIndex={setBrandActiveIndex}
          />
          <RightSide
            onSetCategoryActiveIndex={setCategoryActiveIndex}
            onSetPriceActiveIndex={setPriceActiveIndex}
            onSetBrandActiveIndex={setBrandActiveIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsMain;
