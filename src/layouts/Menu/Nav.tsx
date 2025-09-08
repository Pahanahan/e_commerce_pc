// import { useState } from "react";
// import { MdOutlineMenu } from "react-icons/md";

import styles from "./Nav.module.css";

function Nav() {
  // const [hideNav, setHideNav] = useState<boolean>(true);

  const btns = (
    <>
      <a className={styles["nav__link"]}>Laptops</a>
      <a className={styles["nav__link"]}>Desktop PCs</a>
      <a className={styles["nav__link"]}>Networking Devices</a>
      <a className={styles["nav__link"]}>Printers & Scaners</a>
      <a className={styles["nav__link"]}>PC Parts</a>
      <a className={styles["nav__link"]}>All Other Products</a>
      {/* <button className={styles["nav__btn"]}>Prepairs</button>
      <button className={styles["nav__btn"]}>Our Deals</button> */}
    </>
  );

  return (
    <div className={styles["nav"]}>
      <div>
        {/* <div onClick={() => setHideNav(!hideNav)} className={styles["burger"]}>
          <MdOutlineMenu fontSize="24px" />
        </div> */}
        <div className={styles["nav__items"]}>{btns}</div>
      </div>
    </div>
  );
}

export default Nav;
