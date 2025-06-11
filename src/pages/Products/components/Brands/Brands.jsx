import roccat from "../../../../assets/images/partners/roccat-min.png";
import msi from "../../../../assets/images/partners/msi-min.png";
import thermaltake from "../../../../assets/images/partners/thermaltake-min.png";
import adata from "../../../../assets/images/partners/adata-min.png";
import hp from "../../../../assets/images/partners/hp-min.png";
import gigabyte from "../../../../assets/images/partners/gigabyte-min.png";
import styles from "./Brands.module.css";

function Brands() {
  const brands = [roccat, msi, thermaltake, adata, hp, gigabyte];

  const brandsMap = brands.map((item, i) => (
    <div key={i} className={styles["brands__item"]}>
      <img src={item} />
    </div>
  ));

  return (
    <div className={styles["brands"]}>
      <h2 className={styles["brands__title"]}>Brands</h2>
      <button className={styles["brands__show-all"]}>All Brands</button>
      <div className={styles["brands__box"]}>{brandsMap}</div>
    </div>
  );
}

export default Brands;
