import styles from "./Button.module.css";

function Button({ type, title }) {
  return (
    <button type={type} className={styles["button"]}>
      {title}
    </button>
  );
}

export default Button;
