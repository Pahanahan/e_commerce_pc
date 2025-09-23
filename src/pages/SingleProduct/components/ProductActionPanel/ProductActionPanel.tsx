import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../../ui/Button/Button";
import CurrentSelectProduct from "../../../../components/CurrentSelectProduct/CurrentSelectProduct";
import { increaseOneCartItem } from "../../../../redux/user/reducers";
import formatPrice from "../../../../utils/formatPrice";
import { RootState } from "../../../../redux/store";

import paypal from "../../../../assets/icons/paypal-btn.svg";
import styles from "./ProductActionPanel.module.css";

interface ProductActionPanelProp {
  id: number;
}

function ProductActionPanel({ id }: ProductActionPanelProp) {
  const { isLogedIn } = useSelector((state: RootState) => state.login);
  const quantity: number =
    useSelector((state: RootState) => state.login.users)
      .find((user) => user.login === isLogedIn)
      ?.cart.find((item) => item.id === id)?.quantity ?? 0;

  const dispatch = useDispatch();

  const price = useSelector(
    (state: RootState) => state.products.allProducts
  ).find((product) => product.id === id)?.price;

  const completedPrice = typeof price === "number" ? price * quantity : 0;

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
        <CurrentSelectProduct
          id={id}
          isLogedIn={isLogedIn}
          quantity={quantity}
        />
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
