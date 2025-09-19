import { ReactNode } from "react";
import styles from "./ButtonShopping.module.css";

interface ButtonShoppingProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

function ButtonShopping({
  children,
  onClick,
  disabled = false,
}: ButtonShoppingProps) {
  return (
    <button className={styles["button"]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonShopping;
