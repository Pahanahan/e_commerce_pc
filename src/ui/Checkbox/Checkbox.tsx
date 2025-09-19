import styles from "./Checkbox.module.css";

interface CheckboxProp {
  text: string;
}

function Checkbox({ text }: CheckboxProp) {
  return (
    <div className={styles["checkbox"]}>
      <input type="checkbox" />
      <span></span>
      <p>{text}</p>
    </div>
  );
}

export default Checkbox;
