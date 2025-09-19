import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import CartMain from "./components/CartMain/CartMain";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";

import styles from "./Cart.module.css";

function Cart() {
  return (
    <div className={styles["cart"]}>
      <div className="container">
        <Breadcrumbs />
      </div>
      <Title title="Shopping Cart" />
      <CartMain />
      <BenefitsSection background="#F5F7FF" />
    </div>
  );
}

export default Cart;
