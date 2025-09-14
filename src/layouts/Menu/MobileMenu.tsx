import { useState, useRef, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";

import useClickOutside from "../../customHooks/useClickOutside";

import styles from "./MobileMenu.module.css";

function MobileMenu() {
  const [hideNav, setHideNav] = useState<boolean>(true);
  const btnRef = useRef(null);

  const btns = (
    <>
      <a href="#" className={styles["mobile-menu__link"]}>
        Laptops
      </a>
      <a href="#" className={styles["mobile-menu__link"]}>
        Desktop PCs
      </a>
      <a href="#" className={styles["mobile-menu__link"]}>
        Networking Devices
      </a>
      <a href="#" className={styles["mobile-menu__link"]}>
        Printers & Scaners
      </a>
      <a href="#" className={styles["mobile-menu__link"]}>
        PC Parts
      </a>
      <a href="#" className={styles["mobile-menu__link"]}>
        All Other Products
      </a>
    </>
  );

  useClickOutside(setHideNav, `.${styles["burger"]}`, true);

  return (
    <div className={styles["mobile-menu"]}>
      <div
        ref={btnRef}
        onClick={() => setHideNav(!hideNav)}
        className={styles["burger"]}
      >
        <MdOutlineMenu fontSize="24px" />
      </div>
      <div
        className={`${styles["mobile-menu__items"]} ${
          hideNav ? styles["mobile-menu__items--hidden"] : ""
        }`}
      >
        {btns}
      </div>
    </div>
  );
}

export default MobileMenu;
