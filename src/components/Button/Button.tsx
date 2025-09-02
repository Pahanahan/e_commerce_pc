import { memo } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
  title?: string;
  image?: string;
  backgroundColor?: string;
  color?: string;
}

const Button = memo(function Button({
  onClick,
  type,
  title,
  image,
  backgroundColor,
  color,
}: ButtonProps) {
  if (image) {
    return (
      <button
        onClick={onClick}
        type={type}
        className={styles["button"]}
        style={{ backgroundColor: backgroundColor }}
      >
        <img src={image} alt="button" />
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        type={type}
        className={styles["button"]}
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        {title}
      </button>
    );
  }
});

export default Button;
