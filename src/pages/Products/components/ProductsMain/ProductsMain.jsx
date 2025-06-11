import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

import styles from "./ProductsMain.module.css";

function ProductsMain() {
  return (
    <div className={styles["products-main"]}>
      <div className="container">
        <div className={styles["products-main__inner"]}>
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default ProductsMain;
