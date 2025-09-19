import { ReactNode } from "react";
import styles from "./ButtonShopping.module.css";

interface ButtonShoppingProps {
  children: ReactNode;
  disabled?: boolean;
}

function ButtonShopping({ children, disabled }: ButtonShoppingProps) {
  return (
    <button className={styles["button"]} disabled={disabled}>
      {children}
    </button>
  );
}

export default ButtonShopping;
