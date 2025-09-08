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
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
      <div className={styles["footer-bottom__payment"]}>
        <a
          href="https://www.paypal.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={paypal} alt="PayPal" />
        </a>
        <a
          href="https://usa.visa.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={visa} alt="Visa" />
        </a>
        <a
          href="https://www.mastercardservices.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={maestro} alt="Master Card" />
        </a>
        <a
          href="https://www.discover.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discover} alt="Discover" />
        </a>
        <a
          href="https://www.americanexpress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={americanexpress} alt="American Express" />
        </a>
      </div>
      <p className={styles["footer-bottom__text"]}>
        Copyright © 2025 Shop Pty. Ltd.
      </p>
    </div>
  );
}

export default FooterBottom;
