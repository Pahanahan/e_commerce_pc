import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../../components/Button/Button";
import {
  incrementCartItem,
  increaseOneCartItem,
} from "../../../../redux/user/reducers";
import formatPrice from "../../../../utils/formatPrice";
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

  const price = useSelector(
    (state: RootState) => state.products.allProducts
  ).find((product) => product.id === id)?.price;

  const completedPrice = typeof price === "number" ? price * quantity : 0;

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

  const handleIncrementProduct = (): void => {
    const payload = {
      login: isLogedIn,
      productId: id,
      quantity: quantity + 1,
    };
    dispatch(increaseOneCartItem(payload));
  };

  return (
    <div className={styles["action-panel"]}>
      <div className={styles["action-panel__current"]}>
        <div className={styles["action-panel__current-text"]}>
          On Sale from <span>${formatPrice(completedPrice)}</span>
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
        <Button onClick={handleIncrementProduct}>Add to Cart</Button>
        <Button backgroundColor="#FFB800" href="https://www.paypal.com">
          <img src={paypal} alt="PayPal" />
        </Button>
      </div>
    </div>
  );
}

export default ProductActionPanel;
