import styles from "./Partners.module.css";
import roccat from "../../assets/images/partners/roccat.png";
import msi from "../../assets/images/partners/msi.png";
import razer from "../../assets/images/partners/razer.png";
import thermaltake from "../../assets/images/partners/thermaltake.png";
import adata from "../../assets/images/partners/adata.png";
import hp from "../../assets/images/partners/hp.png";
import gigabyte from "../../assets/images/partners/gigabyte.png";

function Partners() {
  const imageArr = [roccat, msi, razer, thermaltake, adata, hp, gigabyte];

  const parntersMap = imageArr.map((item, i) => (
    <img className={styles["partners__img"]} key={i} src={item} alt="partner" />
  ));

  return (
    <div className={styles["partners"]}>
      <div className="container">
        <div className={styles["partners__box"]}>{parntersMap}</div>
      </div>
    </div>
  );
}

export default Partners;
