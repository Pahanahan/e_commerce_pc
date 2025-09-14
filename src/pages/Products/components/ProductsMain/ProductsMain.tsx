import { useState } from "react";

import MobileFilters from "../MobileFilters/MobileFilters";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";
import useWindowWidth from "../../../../customHooks/useWindowWidth";

import styles from "./ProductsMain.module.css";

function ProductsMain() {
  const [categoryActiveIndex, setCategoryActiveIndex] = useState<number | null>(
    null
  );
  const [priceActiveIndex, setPriceActiveIndex] = useState<number | null>(null);
  const [brandActiveIndex, setBrandActiveIndex] = useState<number | null>(null);
  const [hasFilters, setHasFilters] = useState<boolean>(false);

  const windowWidth = useWindowWidth();

  return (
    <div className={styles["products-main"]}>
      <div className="container">
        <div className={styles["products-main__inner"]}>
          {windowWidth > 767 ? (
            <LeftSide
              onCategoryActiveIndex={categoryActiveIndex}
              onSetCategoryActiveIndex={setCategoryActiveIndex}
              onPriceActiveIndex={priceActiveIndex}
              onSetPriceActiveIndex={setPriceActiveIndex}
              onBrandActiveIndex={brandActiveIndex}
              onSetBrandActiveIndex={setBrandActiveIndex}
              onSetHasFilters={setHasFilters}
            />
          ) : (
            <MobileFilters
              onCategoryActiveIndex={categoryActiveIndex}
              onSetCategoryActiveIndex={setCategoryActiveIndex}
              onPriceActiveIndex={priceActiveIndex}
              onSetPriceActiveIndex={setPriceActiveIndex}
              onBrandActiveIndex={brandActiveIndex}
              onSetBrandActiveIndex={setBrandActiveIndex}
              onHasFilters={hasFilters}
              onSetHasFilters={setHasFilters}
            />
          )}
          {hasFilters ? (
            ""
          ) : (
            <RightSide
              onSetCategoryActiveIndex={setCategoryActiveIndex}
              onSetPriceActiveIndex={setPriceActiveIndex}
              onSetBrandActiveIndex={setBrandActiveIndex}
              onSetHasFilters={setHasFilters}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsMain;
