import { useRef } from "react";

import accordion from "../../../../../../utils/accordion/accordion";

import arrowUp from "../../../../../../assets/icons/arrow-up.svg";
import styles from "./Accordion.module.css";

interface AccordionProps {
  accordionState: boolean;
  setAccordionState: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

function Accordion({
  accordionState,
  setAccordionState,
  title,
}: AccordionProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);

  return (
    <div
      onClick={() => accordion(accordionState, setAccordionState, imgRef)}
      className={styles["accordion"]}
    >
      <div className={styles["accordion__text"]}>{title}</div>
      <img
        className={styles["accordion__img"]}
        ref={imgRef}
        src={arrowUp}
        alt="arrow"
      />
    </div>
  );
}

export default Accordion;
