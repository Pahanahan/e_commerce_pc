import styles from "./Partners.module.css";
import roccat from "/images/partners/roccat.png";
import msi from "/images/partners/msi.png";
import razer from "/images/partners/razer.png";
import thermaltake from "/images/partners/thermaltake.png";
import adata from "/images/partners/adata.png";
import hp from "/images/partners/hp.png";
import gigabyte from "/images/partners/gigabyte.png";

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
