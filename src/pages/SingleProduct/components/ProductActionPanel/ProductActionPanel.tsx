import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../../components/Button/Button";
import { incrementCartItem } from "../../../../redux/user/reducers";
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
  const { isLogedIn } = useSelector((state: RootState) => state.login);
  const quantity: number =
    useSelector((state: RootState) => state.login.users)
      .find((user) => user.login === isLogedIn)
      ?.cart.find((item) => item.id === id)?.quantity ?? 0;

  const [buttonDisabled] = useState<boolean>(!isLogedIn);
  const dispatch = useDispatch();

  const handleChangeQuantityProduct = (plusOrMinus: PlusOrMinus): void => {
    if (plusOrMinus === PlusOrMinus.PLUS) {
      const payload = {
        login: isLogedIn,
        productId: id,
        quantity: quantity + 1,
      };
      dispatch(incrementCartItem(payload));
    } else if (quantity > 0) {
      const payload = {
        login: isLogedIn,
        productId: id,
        quantity: quantity - 1,
      };
      dispatch(incrementCartItem(payload));
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
          <div className={styles["action-panel__current-num"]}>{quantity}</div>
          <div className={styles["action-panel__current-btns"]}>
            <button
              onClick={() => handleChangeQuantityProduct(PlusOrMinus.PLUS)}
              type="button"
              disabled={buttonDisabled}
              className={styles["action-panel__current-btn"]}
            >
              <img src={arrowUp} alt="plus" />
            </button>
            <button
              onClick={() => handleChangeQuantityProduct(PlusOrMinus.MINUS)}
              type="button"
              disabled={buttonDisabled}
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
