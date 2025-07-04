import styles from "./Button.module.css";

function Button({ onClick, type, title }) {
  return (
    <button onClick={onClick} type={type} className={styles["button"]}>
      {title}
    </button>
  );
}

export default Button;
