import box from "../../../../../assets/icons/box.svg";
import list from "../../../../../assets/icons/list.svg";
import styles from "./ButtonsStyle.module.css";

function ButtonsStyle({ listOrGrid, onSetListOrGrid }) {
  const cssClassGrid =
    listOrGrid === "grid"
      ? `${styles["sort-box__btn--active"]}`
      : listOrGrid === "list"
      ? `${styles["sort-box__btn"]}`
      : "";
  const cssClassList =
    listOrGrid === "list"
      ? `${styles["sort-box__btn--active"]}`
      : listOrGrid === "grid"
      ? `${styles["sort-box__btn"]}`
      : "";

  return (
    <div className={styles["sort-box__style-btn"]}>
      <button
        onClick={() => onSetListOrGrid("grid")}
        // className={styles["sort-box__btn"]}
        className={cssClassGrid}
      >
        <img src={box} alt="button" />
      </button>
      <button
        onClick={() => onSetListOrGrid("list")}
        // className={styles["sort-box__btn"]}
        className={cssClassList}
      >
        <img src={list} alt="button" />
      </button>
    </div>
  );
}

export default ButtonsStyle;
