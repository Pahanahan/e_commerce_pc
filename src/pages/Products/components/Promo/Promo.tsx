import { Link } from "react-router-dom";

import laptop from "../../../../assets/images/promo/promo.jpg";
import styles from "./Promo.module.css";

function Promo() {
  return (
    <div className={styles["promo"]}>
      <div className="container">
        <Link to="/product">
          <img src={laptop} alt="laptop" />
        </Link>
      </div>
    </div>
  );
}

export default Promo;
