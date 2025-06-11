import styles from "./Pagination.module.css";
import arrowLeft from "../../../../assets/icons/arrow-left-grey.svg";
import arrowRight from "../../../../assets/icons/arrow-right-grey.svg";

function Pagination() {
  return (
    <div className={styles["pagination"]}>
      <div className={styles["pagination__item"]}>
        <img src={arrowLeft} alt="arrow-left" />
      </div>
      <div className={styles["pagination__item"]}>1</div>
      <div className={styles["pagination__item--active"]}>2</div>
      <div className={styles["pagination__item"]}>3</div>
      <div className={styles["pagination__item-more"]}>...</div>
      <div className={styles["pagination__item"]}>15</div>
      <div className={styles["pagination__item"]}>
        <img src={arrowRight} alt="arrow-right" />
      </div>
    </div>
  );
}

export default Pagination;
