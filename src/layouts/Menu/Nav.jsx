import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles["nav"]}>
      <button className={styles["nav__btn"]}>Laptops</button>
      <button className={styles["nav__btn"]}>Desktop PCs</button>
      <button className={styles["nav__btn"]}>Networking Devices</button>
      <button className={styles["nav__btn"]}>Printers & Scaners</button>
      <button className={styles["nav__btn"]}>PC Parts</button>
      <button className={styles["nav__btn"]}>All Other Products</button>
      <button className={styles["nav__btn"]}>Prepairs</button>
      <button className={styles["nav__btn"]}>Our Deals</button>
    </div>
  );
}

export default Nav;
