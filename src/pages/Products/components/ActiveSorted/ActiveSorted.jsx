import styles from "./ActiveSorted.module.css";

function ActiveSorted() {
  return (
    <div className={styles["active-sorted"]}>
      <div className={styles["active-sorted__item"]}>
        CUSTOM PCS <span>(24)</span>
        <button></button>
      </div>
      <div className={styles["active-sorted__item"]}>
        HP/COMPAQ PCS <span>(24)</span>
        <button></button>
      </div>
      <div className={styles["active-sorted__item-clear"]}>Clear All</div>
    </div>
  );
}

export default ActiveSorted;
