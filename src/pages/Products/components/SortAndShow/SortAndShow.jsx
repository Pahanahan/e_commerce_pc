import { useSelector } from "react-redux";
import SortSelector from "./SortSelector/SortSelector";
import ShowSelector from "./ShowSelector/ShowSelector";
import ButtonsStyle from "./ButtonsStyle/ButtonsStyle";

import styles from "./SortAndShow.module.css";

function SortAndShow() {
  const products = useSelector((state) => state.products);
  const productsLength = products.allProducts.length;
  const visibleProducts = products.visibleProducts.length;

  return (
    <div className={styles["sort-box"]}>
      <div className={styles["sort-box__length"]}>
        Products 1-{visibleProducts} of {productsLength}
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
