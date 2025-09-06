import { memo } from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
  backgroundColor?: string;
  color?: string;
  href?: string;
  children?: React.ReactNode;
}

const Button = memo(function Button({
  onClick,
  type = "button",
  backgroundColor,
  color,
  href,
  children,
}: ButtonProps) {
  const style = { backgroundColor, color };

  if (href) {
    return (
      <a
        href={href}
        className={styles["button"]}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        onClick={onClick}
        type={type}
        className={styles["button"]}
        style={style}
      >
        {children}
      </button>
    );
  }
});

export default Button;
