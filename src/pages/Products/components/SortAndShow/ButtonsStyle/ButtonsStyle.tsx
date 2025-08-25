import { GridOrList } from "../../../../../types/types";

import box from "../../../../../assets/icons/box.svg";
import list from "../../../../../assets/icons/list.svg";
import styles from "./ButtonsStyle.module.css";

interface ButtonStyleProps {
  listOrGrid: "grid" | "list";
  onSetListOrGrid: React.Dispatch<React.SetStateAction<GridOrList>>;
}

function ButtonsStyle({ listOrGrid, onSetListOrGrid }: ButtonStyleProps) {
  const cssClassGrid =
    listOrGrid === GridOrList.GRID
      ? `${styles["sort-box__btn--active"]}`
      : `${styles["sort-box__btn"]}`;
  const cssClassList =
    listOrGrid === GridOrList.LIST
      ? `${styles["sort-box__btn--active"]}`
      : `${styles["sort-box__btn"]}`;

  return (
    <div className={styles["sort-box__style-btn"]}>
      <button
        onClick={() => onSetListOrGrid(GridOrList.GRID)}
        className={cssClassGrid}
      >
        <img src={box} alt="grid view" />
      </button>
      <button
        onClick={() => onSetListOrGrid(GridOrList.LIST)}
        className={cssClassList}
      >
        <img src={list} alt="list view" />
      </button>
    </div>
  );
}

export default ButtonsStyle;
