import Menu from "../Menu/Menu";

import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import arrowdown from "../../assets/icons/arrow-down.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header__time"]}>
          Mon-Thu:
          <span className={styles["header__time-span"]}>9:00 AM - 5:30 PM</span>
          <button className={styles["header__time-btn"]}>
            <img src={arrowdown} />
          </button>
        </div>
        <div className={styles["header__contacts"]}>
          Visit our showroom in 1234 Street Adress City Address, 1234
          <a className={styles["header__contacts-link"]} href="/contact">
            Contact Us
          </a>
        </div>
        <div className={styles["header__links"]}>
          <a className={styles["header__links-phone"]} href="tel:0012345678">
            Call Us: (00) 1234 5678
          </a>
          <div className={styles["header__links-socials"]}>
            <a
              className={styles["header__links-link"]}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              className={styles["header__links-link"]}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagramm" />
            </a>
          </div>
        </div>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
