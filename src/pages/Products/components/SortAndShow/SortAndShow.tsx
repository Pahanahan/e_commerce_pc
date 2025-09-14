import { useSelector } from "react-redux";
import { LiaFilterSolid } from "react-icons/lia";

import SortSelector from "./SortSelector/SortSelector";
import ShowSelector from "./ShowSelector/ShowSelector";
import ButtonsStyle from "./ButtonsStyle/ButtonsStyle";
import { selectVisibleRange } from "../../../../redux/selectors/productsSelectors";
import { GridOrList } from "../../../../types/types";

import styles from "./SortAndShow.module.css";

interface SortAndShowProps {
  listOrGrid: "list" | "grid";
  onSetListOrGrid: React.Dispatch<React.SetStateAction<GridOrList>>;
  onSetHasFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

function SortAndShow({
  listOrGrid,
  onSetListOrGrid,
  onSetHasFilters,
}: SortAndShowProps) {
  const productsText = useSelector(selectVisibleRange);

  return (
    <div className={styles["sort-box"]}>
      <div className={styles["sort-box__length"]}>
        Products {productsText.start}-{productsText.end} of{" "}
        {productsText.length}
      </div>
      <div
        className={styles["sort-box__filter"]}
        onClick={() => onSetHasFilters(true)}
      >
        <LiaFilterSolid fontSize={20} />
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
