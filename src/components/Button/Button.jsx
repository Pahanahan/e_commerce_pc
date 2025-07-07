import { memo } from "react";

import styles from "./Button.module.css";

const Button = memo(function Button({ onClick, type, title }) {
  return (
    <button onClick={onClick} type={type} className={styles["button"]}>
      {title}
    </button>
  );
});

export default Button;
