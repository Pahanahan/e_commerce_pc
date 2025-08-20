import { memo } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
  title: string;
}

const Button = memo(function Button({ onClick, type, title }: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className={styles["button"]}>
      {title}
    </button>
  );
});

export default Button;
