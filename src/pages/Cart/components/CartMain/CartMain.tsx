import { useSelector } from "react-redux";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import SummaryCart from "../SummaryCart/SummaryCart";
import { State, Product } from "../../../../types/types";

import styles from "./CartMain.module.css";

function CartMain() {
  const { isLogedIn, users } = useSelector((state: State) => state.login);
  const allProducts: Product[] = useSelector(
    (state: State) => state.products.allProducts
  );

  const findUser = users.find((user) => user.login === isLogedIn);

  return (
    <div className={styles["cart-main"]}>
      <div className="container">
        <div className={styles["cart-main__inner"]}>
          <ShoppingCart
            isLogedIn={isLogedIn}
            allProducts={allProducts}
            findUser={findUser}
          />
          {findUser ? (
            <SummaryCart allProducts={allProducts} findUser={findUser} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CartMain;
