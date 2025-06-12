import { RiArrowDropLeftLine } from "react-icons/ri";

import arrowUp from "../../../../assets/icons/arrow-up.svg";
import styles from "./Filter.module.css";

function Filter() {
  return (
    <>
      <div className={styles["filter-back"]}>
        <RiArrowDropLeftLine />
        <span>Back</span>
      </div>
      <div className={styles["filter"]}>
        <h2 className={styles["filter__title"]}>Filters</h2>
        <button className={styles["filter__clear-btn"]}>Clear Filter</button>
        <div className={styles["filter__category"]}>
          <div className={styles["filter__category-item"]}>
            <h3>Category</h3>
            <img src={arrowUp} alt="arrow" />
          </div>
          <div className={styles["filter__category-item"]}>
            <div>CUSTOM PCS</div>
            <div>15</div>
          </div>
          <div className={styles["filter__category-item"]}>
            <div>LAPTOPS</div>
            <div>45</div>
          </div>
          <div className={styles["filter__category-item"]}>
            <div>MONITORS</div>
            <div>5</div>
          </div>
          <div className={styles["filter__category-item"]}>
            <div>PCS</div>
            <div>16</div>
          </div>
        </div>
        <div className={styles["filter__category"]}>
          <div className={styles["filter__category-item"]}>
            <h3>Price</h3>
            <img src={arrowUp} alt="arrow" />
          </div>
          <div className={styles["filter__category-item"]}>
            <div>$0.00 - $500.00</div>
            <div>15</div>
          </div>
          <div className={styles["filter__category-item"]}>
            <div>$1.000.00 - $2.000.00</div>
            <div>45</div>
          </div>
          <div className={styles["filter__category-item"]}>
            <div>$2.000.00 - $3.000.00</div>
            <div>6</div>
          </div>
          <div className={styles["filter__category-item"]}>
            <div>$3.000.00 - $4.000.00</div>
            <div>5</div>
          </div>
          <div className={styles["filter__category-item"]}>
            <div>$4.000.00 - $5.000.00</div>
            <div>4</div>
          </div>
          <div className={styles["filter__category-item"]}>
            <div>$5.000.00 - $6.000.00</div>
            <div>3</div>
          </div>
          <div className={styles["filter__category-item"]}>
            <div>$6.000.00 - $7.000.00</div>
            <div>2</div>
          </div>
          <div className={styles["filter__category-item"]}>
            <div>$7.000.00 And Above</div>
            <div>1</div>
          </div>
        </div>
        <button className={styles["filter__apply"]}>Apply Filters (2)</button>
      </div>
    </>
  );
}

export default Filter;
