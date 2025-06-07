import styles from "./BenefitsSection.module.css";
import support from "../../assets/images/others/support.svg";
import account from "../../assets/images/others/account.svg";
import savings from "../../assets/images/others/savings.svg";

function BenefitsSection({ background }) {
  return (
    <div className={styles["benefit"]} style={{ backgroundColor: background }}>
      <div className="small-container">
        <div className={styles["benefit__box"]}>
          <div className={styles["benefit__item"]}>
            <img
              className={styles["benefit__item-img"]}
              src={support}
              alt="support"
            />
            <p className={styles["benefit__item-title"]}>Product Support</p>
            <p className={styles["benefit__item-text"]}>
              Up to 3 years on-site warranty available for your peace of mind.
            </p>
          </div>
          <div className={styles["benefit__item"]}>
            <img
              className={styles["benefit__item-img"]}
              src={account}
              alt="support"
            />
            <p className={styles["benefit__item-title"]}>Personal Account</p>
            <p className={styles["benefit__item-text"]}>
              With big discounts, free delivery and a dedicated support
              specialist.
            </p>
          </div>
          <div className={styles["benefit__item"]}>
            <img
              className={styles["benefit__item-img"]}
              src={savings}
              alt="support"
            />
            <p className={styles["benefit__item-title"]}>Amazing Savings</p>
            <p className={styles["benefit__item-text"]}>
              Up to 70% off new Products, you can be sure of the best price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
