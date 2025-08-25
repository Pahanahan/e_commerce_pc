import styles from "./BuyNowPayLater.module.css";
import zip from "../../assets/icons/zip.svg";

function BuyNowPayLater() {
  return (
    <div className={styles["promo"]}>
      <div className="container">
        <div className={styles["promo__box"]}>
          <img className={styles["promo__box-img"]} src={zip} alt="icon" />
          <span className={styles["promo__box-text"]}>
            <strong>own</strong> it now, up to 6 months interest free{" "}
          </span>
          <span>
            <a className={styles["promo__box-link"]} href="#">
              learn more
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BuyNowPayLater;
