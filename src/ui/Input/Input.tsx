import { ChangeEvent, forwardRef, memo } from "react";

import styles from "./Input.module.css";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: boolean;
  name: string;
  type: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, value, className, name, type, placeholder }, ref) => {
    return (
      <input
        onChange={onChange}
        value={value}
        ref={ref}
        className={`${styles["input"]} ${className ? styles["invalid"] : ""}`}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    );
  }
);

export default memo(Input);
