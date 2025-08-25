import search from "../../assets/icons/search.svg";
import cart from "../../assets/icons/cart.svg";
import avatar from "../../assets/icons/avatar.svg";
import styles from "./MenuActions.module.css";

function MenuActions() {
  return (
    <div className={styles["menu-action"]}>
      <button className={styles["menu-action__search"]}>
        <img src={search} alt="search" />
      </button>
      <a className={styles["menu-action__cart"]} href="#">
        <img src={cart} alt="cart" />
        <span className={styles["menu-action__cart-current"]}>2</span>
      </a>
      <a className={styles["menu-action__user"]} href="#">
        <img src={avatar} alt="cart" />
      </a>
    </div>
  );
}

export default MenuActions;
