import { useSelector } from "react-redux";

import SortSelector from "./SortSelector/SortSelector";
import ShowSelector from "./ShowSelector/ShowSelector";
import ButtonsStyle from "./ButtonsStyle/ButtonsStyle";
import { selectVisibleRange } from "../../../../redux/selectors/productsSelectors";
import { GridOrList } from "../../../../types/types";

import styles from "./SortAndShow.module.css";

interface SortAndShowProps {
  listOrGrid: "list" | "grid";
  onSetListOrGrid: React.Dispatch<React.SetStateAction<GridOrList>>;
}

function SortAndShow({ listOrGrid, onSetListOrGrid }: SortAndShowProps) {
  const productsText = useSelector(selectVisibleRange);

  return (
    <div className={styles["sort-box"]}>
      <div className={styles["sort-box__length"]}>
        Products {productsText.start}-{productsText.end} of{" "}
        {productsText.length}
      </div>
      <div className={styles["sort-box__items"]}>
        <SortSelector />
        <ShowSelector />
        <ButtonsStyle
          onSetListOrGrid={onSetListOrGrid}
          listOrGrid={listOrGrid}
        />
      </div>
    </div>
  );
}

export default SortAndShow;
