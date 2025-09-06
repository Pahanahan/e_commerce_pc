import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import search from "../../assets/icons/search.svg";
import cart from "../../assets/icons/cart.svg";
import avatar from "../../assets/icons/avatar.svg";
import styles from "./MenuActions.module.css";

function MenuActions() {
  const { isLogedIn, users } = useSelector((state: RootState) => state.login);
  const user = users.find((user) => user.login === isLogedIn);

  let currentCart: number =
    user?.cart.reduce((acc, num) => {
      return acc + num.quantity;
    }, 0) || 0;

  return (
    <div className={styles["menu-action"]}>
      <button className={styles["menu-action__search"]}>
        <img src={search} alt="search" />
      </button>
      <a className={styles["menu-action__cart"]} href="#">
        <img src={cart} alt="cart" />
        <span className={styles["menu-action__cart-current"]}>
          {currentCart}
        </span>
      </a>
      <a className={styles["menu-action__user"]} href="#">
        <img src={avatar} alt="cart" />
      </a>
    </div>
  );
}

export default MenuActions;
