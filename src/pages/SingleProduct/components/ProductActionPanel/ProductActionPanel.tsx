import { useState } from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

import Button from "../../../../components/Button/Button";
import { RootState } from "../../../../redux/store";

import arrowUp from "../../../../assets/icons/arrow-up-grey.svg";
import arrowDown from "../../../../assets/icons/arrow-down-grey.svg";
import paypal from "../../../../assets/icons/paypal-btn.svg";
import styles from "./ProductActionPanel.module.css";

enum PlusOrMinus {
  PLUS = "plus",
  MINUS = "minus",
}

interface ProductActionPanelProp {
  id: number;
}

function ProductActionPanel({ id }: ProductActionPanelProp) {
  const allProducts = useSelector(
    (state: RootState) => state.products.allProducts
  );
  const product = allProducts.find((item) => item.id === id);
  console.log(product);
  const [quantityProduct, setQuantityProduct] = useState<number>(0);

  const handleChangeQuantityProduct = (plusOrMinus: string): void => {
    if (plusOrMinus === PlusOrMinus.PLUS) {
      setQuantityProduct((prevState) => prevState + 1);
    } else if (quantityProduct > 0) {
      setQuantityProduct((prevState) => prevState - 1);
    } else {
      return;
    }
  };

  return (
    <div className={styles["action-panel"]}>
      <div className={styles["action-panel__current"]}>
        <div className={styles["action-panel__current-text"]}>
          On Sale from <span>$3,299.00</span>
        </div>
        <div className={styles["action-panel__current-select"]}>
          <div className={styles["action-panel__current-num"]}>
            {quantityProduct}
          </div>
          <div className={styles["action-panel__current-btns"]}>
            <button
              onClick={() => handleChangeQuantityProduct(PlusOrMinus.PLUS)}
              type="button"
              className={styles["action-panel__current-btn"]}
            >
              <img src={arrowUp} alt="plus" />
            </button>
            <button
              onClick={() => handleChangeQuantityProduct(PlusOrMinus.MINUS)}
              type="button"
              className={styles["action-panel__current-btn"]}
            >
              <img src={arrowDown} alt="minus" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles["action-panel__btns"]}>
        <Button type="button" title="Add to Cart" backgroundColor="#0156FF" />
        <Button type="button" image={paypal} backgroundColor="#FFB800">
          {/* <Link to={'/https://www.paypal.com/'} /> */}
        </Button>
      </div>
    </div>
  );
}

export default ProductActionPanel;
