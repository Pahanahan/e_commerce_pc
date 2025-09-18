import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";
import WorkTime from "./WorkTime";
import workDays from "../../data/work-days.json";

import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import arrowdown from "../../assets/icons/arrow-down.svg";
import styles from "./Header.module.css";

function Header() {
  const [worksInfo, setWorksInfo] = useState<boolean>(false);

  const hoursWork = workDays["Mon-Thu: "];

  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div
          onClick={() => setWorksInfo(!worksInfo)}
          className={styles["header__time"]}
        >
          Mon-Thu:
          <span className={styles["header__time-span"]}>{hoursWork}</span>
          <div className={styles["header__time-btn"]}>
            <img src={arrowdown} />
          </div>
        </div>
        <div className={styles["header__contacts"]}>
          Visit our showroom in 1234 Street Adress City Address, 1234
          <Link className={styles["header__contacts-link"]} to="/contacts">
            Contact Us
          </Link>
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
        <div
          className={`${styles["header__time-info"]} 
          ${!worksInfo ? styles["header__time-info--hidden"] : ""}`}
        >
          <WorkTime />
        </div>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
