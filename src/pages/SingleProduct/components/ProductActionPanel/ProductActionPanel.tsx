import arrowUp from "../../../../assets/icons/arrow-up-grey.svg";
import arrowDown from "../../../../assets/icons/arrow-down-grey.svg";
import styles from "./ProductActionPanel.module.css";

function ProductActionPanel() {
  return (
    <div className={styles["action-panel"]}>
      <div className={styles["action-panel__current"]}>
        <div className={styles["action-panel__current-text"]}>
          On Sale from $3,299.00
        </div>
        <div className={styles["action-panel__current-select"]}>
          <div className={styles["action-panel__current-num"]}>1</div>
          <div className={styles["action-panel__current-btns"]}>
            <button
              type="button"
              className={styles["action-panel__current-btn"]}
            >
              {arrowUp}
            </button>
            <button
              type="button"
              className={styles["action-panel__current-btn"]}
            >
              {arrowDown}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductActionPanel;
