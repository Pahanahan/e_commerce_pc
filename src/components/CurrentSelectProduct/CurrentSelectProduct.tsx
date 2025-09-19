import { useState } from "react";
import { useDispatch } from "react-redux";

import { incrementCartItem } from "../../redux/user/reducers";

import arrowUp from "../../assets/icons/arrow-up-grey.svg";
import arrowDown from "../../assets/icons/arrow-down-grey.svg";
import styles from "./CurrentSelectProduct.module.css";

enum PlusOrMinus {
  PLUS = "plus",
  MINUS = "minus",
}

interface CurrentSelectProductProps {
  id: number;
  isLogedIn: string;
  quantity: number;
}

function CurrentSelectProduct({
  id,
  isLogedIn,
  quantity,
}: CurrentSelectProductProps) {
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
    <div className={styles["product-select"]}>
      <div className={styles["product-select__num"]}>{quantity}</div>
      <div className={styles["product-select__btns"]}>
        <button
          onClick={() => handleChangeQuantityProduct(PlusOrMinus.PLUS)}
          type="button"
          disabled={buttonDisabled}
          className={styles["product-select__btn"]}
        >
          <img src={arrowUp} alt="plus" />
        </button>
        <button
          onClick={() => handleChangeQuantityProduct(PlusOrMinus.MINUS)}
          type="button"
          disabled={buttonDisabled}
          className={styles["product-select__btn"]}
        >
          <img src={arrowDown} alt="minus" />
        </button>
      </div>
    </div>
  );
}

export default CurrentSelectProduct;
