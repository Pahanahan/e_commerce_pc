import Button from "../../components/Button/Button";

import styles from "./FooterTop.module.css";

function FooterTop() {
  return (
    <div className={styles["footer-top"]}>
      <div className={styles["footer-top__box"]}>
        <h3 className={styles["footer-top__title"]}>
          Sign Up To Our Newsletter.
        </h3>
        <p className={styles["footer-top__text"]}>
          Be the first to hear about the latest offers.
        </p>
      </div>
      <form className={styles["footer-top__form"]}>
        <input
          type="email"
          className={styles["footer-top__input"]}
          placeholder="Your Email"
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
}

export default FooterTop;
