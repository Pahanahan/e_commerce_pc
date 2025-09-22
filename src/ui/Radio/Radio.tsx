import styles from "./Radio.module.css";

interface RadioProp {
  checked?: boolean;
  onChange: () => void;
  title: string;
  text: string;
  name: string;
}

function Radio({ checked, onChange, title, text, name }: RadioProp) {
  return (
    <label className={styles["radio__label"]}>
      <p className={styles["radio__label-text"]}>{title}</p>
      <div className={styles["radio"]}>
        <input
          className={styles["radio__input"]}
          name={name}
          type="radio"
          checked={checked}
          onChange={onChange}
        />
        <span className={styles["radio__span"]}></span>
        <p className={styles["radio__text"]}>{text}</p>
      </div>
    </label>
  );
}

export default Radio;
