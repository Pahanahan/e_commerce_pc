import Filter from "../Filter/Filter";
import Brands from "../Brands/Brands";
import MyWishList from "../MyWishList/MyWishList";

import promo from "../../../../assets/images/promo/chair.jpg";
import styles from "./Filters.module.css";

function Filters({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
  onBrandActiveIndex,
  onSetBrandActiveIndex,
  onBurgerState,
}) {
  console.log(onBurgerState);

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
      />
      <MyWishList />
      <div className={styles["promo"]}>
        <img src={promo} alt="chair" />
      </div>
    </div>
  );
}

export default Filters;
