import SortSelector from "./SortSelector/SortSelector";
import ShowSelector from "./ShowSelector/ShowSelector";
import ButtonsStyle from "./ButtonsStyle/ButtonsStyle";

import productsdata from "../../../../data/products-data.json";
import styles from "./SortAndShow.module.css";

function SortAndShow() {
  const currentProducts = productsdata.length;

  return (
    <div className={styles["sort-box"]}>
      <div className={styles["sort-box__length"]}>
        Items 1-21 of {currentProducts}
      </div>
      <div className={styles["sort-box__items"]}>
        <SortSelector />
        <ShowSelector />
        <ButtonsStyle />
      </div>
    </div>
  );
}

export default SortAndShow;
