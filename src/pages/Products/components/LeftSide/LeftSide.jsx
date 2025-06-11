import Filters from "../Filters/Filters";
import styles from "./LeftSide.module.css";

function LeftSide() {
  return (
    <div className={styles["left"]}>
      <Filters />
    </div>
  );
}

export default LeftSide;
