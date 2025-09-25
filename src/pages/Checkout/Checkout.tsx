import { useLocation } from "react-router-dom";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";

import styles from "./Checkout.module.css";

function Checkout() {
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles["checkout"]}>
      <div className="container">
        <Breadcrumbs />
      </div>
      <div className={styles["checkout__inner"]}>
        <Title title="Checkout" />
        <h3>loh</h3>
      </div>
    </div>
  );
}

export default Checkout;
