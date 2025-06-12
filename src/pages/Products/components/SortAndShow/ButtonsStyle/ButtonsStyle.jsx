import styles from "./ButtonsStyle.module.css";
import box from "../../../../../assets/icons/box.svg";
import list from "../../../../../assets/icons/list.svg";

function ButtonsStyle() {
  return (
    <div className={styles["sort-box__style-btn"]}>
      <button className={styles["sort-box__btn"]}>
        <img src={box} alt="button" />
      </button>
      <button className={styles["sort-box__btn"]}>
        <img src={list} alt="button" />
      </button>
    </div>
  );
}

export default ButtonsStyle;
