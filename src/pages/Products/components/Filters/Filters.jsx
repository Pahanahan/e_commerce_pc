import Filter from "../Filter/Filter";
import Brands from "../Brands/Brands";
import MyWishList from "../MyWishList/MyWishList";

import promo from "../../../../assets/images/promo/chair.jpg";
import styles from "./Filters.module.css";

function Filters() {
  return (
    <div className={styles["filters"]}>
      <Filter />
      <Brands />
      <MyWishList />
      <div className={styles["promo"]}>
        <img src={promo} alt="chair" />
      </div>
    </div>
  );
}

export default Filters;
