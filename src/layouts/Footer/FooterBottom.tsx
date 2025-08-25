import facebook from "../../assets/icons/facebook-grey.svg";
import instagram from "../../assets/icons/instagram-grey.svg";
import paypal from "../../assets/icons/paypal.svg";
import visa from "../../assets/icons/visa.svg";
import maestro from "../../assets/icons/maestro.svg";
import discover from "../../assets/icons/discover.svg";
import americanexpress from "../../assets/icons/american-express.svg";

import styles from "./FooterBottom.module.css";

function FooterBottom() {
  return (
    <div className={styles["footer-bottom"]}>
      <div>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
      <div className={styles["footer-bottom__payment"]}>
        <a href="#">
          <img src={paypal} alt="PayPal" />
        </a>
        <a href="#">
          <img src={visa} alt="Visa" />
        </a>
        <a href="#">
          <img src={maestro} alt="PayPal" />
        </a>
        <a href="#">
          <img src={discover} alt="Visa" />
        </a>
        <a href="#">
          <img src={americanexpress} alt="Visa" />
        </a>
      </div>
      <p className={styles["footer-bottom__text"]}>
        Copyright © 2020 Shop Pty. Ltd.
      </p>
    </div>
  );
}

export default FooterBottom;
