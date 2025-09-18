import { ChangeEvent, forwardRef, memo } from "react";

import styles from "./Textarea.module.css";

interface TextareaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  className?: boolean;
  name: string;
  placeholder?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ onChange, value, className, name, placeholder }, ref) => {
    return (
      <textarea
        onChange={onChange}
        value={value}
        ref={ref}
        className={`${styles["textarea"]} ${
          className ? styles["invalid"] : ""
        }`}
        name={name}
        placeholder={placeholder}
      ></textarea>
    );
  }
);

export default memo(Textarea);
