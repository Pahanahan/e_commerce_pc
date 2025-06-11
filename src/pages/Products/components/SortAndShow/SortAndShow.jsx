import styles from "./SortAndShow.module.css";
import box from "../../../../assets/icons/box.svg";
import list from "../../../../assets/icons/list.svg";

function SortAndShow() {
  return (
    <div className={styles["sort-box"]}>
      <div className={styles["sort-box__length"]}>Items 1-35 of 61</div>
      <div className={styles["sort-box__items"]}>
        <div className={styles["sort-box__position"]}>
          Sort By: <span>Position</span>
        </div>
        <div className={styles["sort-box__show"]}>
          Show: <span>35 per page</span>
        </div>
        <div className={styles["sort-box__style-btn"]}>
          <button className={styles["sort-box__btn"]}>
            <img src={box} alt="button" />
          </button>
          <button className={styles["sort-box__btn"]}>
            <img src={list} alt="button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortAndShow;
