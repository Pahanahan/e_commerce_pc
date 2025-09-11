import { memo } from "react";

import zip from "../../assets/icons/zip.svg";
import styles from "./BuyNowPayLater.module.css";

interface BuyNowPayLaterProp {
  background: string;
}

const BuyNowPayLater = memo(function BuyNowPayLater({
  background,
}: BuyNowPayLaterProp) {
  return (
    <div className={styles["promo"]} style={{ backgroundColor: background }}>
      <div className="container">
        <div className={styles["promo__box"]}>
          <img className={styles["promo__box-img"]} src={zip} alt="icon" />
          <div>
            {" "}
            <span className={styles["promo__box-text"]}>
              <strong>own</strong> it now, up to 6 months interest free{" "}
            </span>
            <span>
              <a
                className={styles["promo__box-link"]}
                href="https://zip.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                learn more
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default BuyNowPayLater;
