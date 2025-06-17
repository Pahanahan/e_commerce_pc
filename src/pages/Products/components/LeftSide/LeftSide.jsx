import Filters from "../Filters/Filters";
import styles from "./LeftSide.module.css";

function LeftSide({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
  onBrandActiveIndes,
  onSetBrandActiveIndes,
}) {
  return (
    <div className={styles["left"]}>
      <Filters
        onCategoryActiveIndex={onCategoryActiveIndex}
        onSetCategoryActiveIndex={onSetCategoryActiveIndex}
        onPriceActiveIndex={onPriceActiveIndex}
        onSetPriceActiveIndex={onSetPriceActiveIndex}
        onBrandActiveIndes={onBrandActiveIndes}
        onSetBrandActiveIndes={onSetBrandActiveIndes}
      />
    </div>
  );
}

export default LeftSide;
