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
          <div>
            <h3>Category</h3>
            <img src={arrowUp} alt="arrow" />
          </div>
          <div>
            <div>CUSTOM PCS</div>
            <div>15</div>
          </div>
          <div>
            <div>LAPTOPS</div>
            <div>45</div>
          </div>
          <div>
            <div>MONITORS</div>
            <div>5</div>
          </div>
          <div>
            <div>PCS</div>
            <div>16</div>
          </div>
        </div>
        <div className={styles["filter__category"]}>
          <div>
            <h3>Price</h3>
            <img src={arrowUp} alt="arrow" />
          </div>
          <div>
            <div>CUSTOM PCS</div>
            <div>15</div>
          </div>
          <div>
            <div>LAPTOPS</div>
            <div>45</div>
          </div>
          <div>
            <div>MONITORS</div>
            <div>5</div>
          </div>
        </div>
        <div className={styles["filter__apply"]}>Apply Filters (2)</div>
      </div>
    </>
  );
}

export default Filter;
