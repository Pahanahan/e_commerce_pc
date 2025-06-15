import Filters from "../Filters/Filters";
import styles from "./LeftSide.module.css";

function LeftSide({
  onCategoryActiveIndex,
  onSetCategoryActiveIndex,
  onPriceActiveIndex,
  onSetPriceActiveIndex,
}) {
  return (
    <div className={styles["left"]}>
      <Filters
        onCategoryActiveIndex={onCategoryActiveIndex}
        onSetCategoryActiveIndex={onSetCategoryActiveIndex}
        onPriceActiveIndex={onPriceActiveIndex}
        onSetPriceActiveIndex={onSetPriceActiveIndex}
      />
    </div>
  );
}

export default LeftSide;
