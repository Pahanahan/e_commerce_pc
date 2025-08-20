import { FiChevronRight } from "react-icons/fi";
import { RiArrowDropLeftLine } from "react-icons/ri";

import styles from "./LeftSideBurger.module.css";

interface LeftSideBurgerProps {
  onBurgerState: boolean;
  onSetBurgerState: React.Dispatch<React.SetStateAction<boolean>>;
}

function LeftSideBurger({
  onBurgerState,
  onSetBurgerState,
}: LeftSideBurgerProps) {
  return (
    <div
      onClick={() => onSetBurgerState(!onBurgerState)}
      className={`${styles["burger"]} ${
        !onBurgerState ? styles["burger--hidden"] : ""
      }`}
      title={onBurgerState ? "Hide filters" : "Show filters"}
    >
      {onBurgerState ? (
        <div className={styles["burger__box"]}>
          <RiArrowDropLeftLine />
          <span>Back</span>
        </div>
      ) : (
        <div className={styles["burger__box"]}>
          <FiChevronRight />
        </div>
      )}
    </div>
  );
}

export default LeftSideBurger;
