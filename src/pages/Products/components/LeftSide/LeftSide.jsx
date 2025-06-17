import Filters from "../Filters/Filters";
import styles from "./LeftSide.module.css";

function LeftSide({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
  onBrandActiveIndex,
  onSetBrandActiveIndex,
}) {
  return (
    <div className={styles["left"]}>
      <Filters
        onCategoryActiveIndex={onCategoryActiveIndex}
        onSetCategoryActiveIndex={onSetCategoryActiveIndex}
        onPriceActiveIndex={onPriceActiveIndex}
        onSetPriceActiveIndex={onSetPriceActiveIndex}
        onBrandActiveIndex={onBrandActiveIndex}
        onSetBrandActiveIndex={onSetBrandActiveIndex}
      />
    </div>
  );
}

export default LeftSide;
