import { MouseEventHandler } from "react";
import arrowUp from "../../../../../../assets/icons/arrow-up.svg";
import styles from "./Label.module.css";

interface LabelProps {
  title: string;
  className: string;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClick: MouseEventHandler;
  stateText: string;
  elementMap: React.ReactNode;
  select: boolean;
}

function Label({
  title,
  className,
  onClick,
  stateText,
  elementMap,
  select,
}: LabelProps) {
  const imageClassName = `${styles["label__select-arrow"]} ${
    select ? "" : styles["label__select-arrow--reversed"]
  }`;

  const optionsClassName = `${styles["label__options-box"]} ${
    select ? styles["label__options-box--visible"] : ""
  }`;

  return (
    <label className={styles["label"]}>
      {title}
      <div
        onClick={onClick}
        className={`${styles["label__select"]} ${styles[className]}`}
      >
        {stateText}
        <img className={imageClassName} src={arrowUp} alt="arrow" />
        <ul className={optionsClassName}>{elementMap}</ul>
      </div>
    </label>
  );
}

export default Label;
