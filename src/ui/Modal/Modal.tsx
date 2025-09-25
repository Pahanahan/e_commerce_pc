import { forwardRef, MouseEvent, memo } from "react";
import { IoClose } from "react-icons/io5";

import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  onBackdropClick: (e: MouseEvent<HTMLDivElement>) => void;
  text?: string;
  thanks?: string;
  error?: boolean;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ onClose, onBackdropClick, text, thanks, error }, ref) => {
    const cssBox = error
      ? `${styles["modal-sendler__box"]} ${styles["modal-sendler__box--error"]}`
      : `${styles["modal-sendler__box"]}`;

    const cssText = error
      ? `${styles["modal-sendler__text"]} ${styles["modal-sendler__text--error"]}`
      : `${styles["modal-sendler__text"]}`;

    return (
      <div
        ref={ref}
        className={styles["modal-sendler"]}
        onClick={onBackdropClick}
      >
        <div className={cssBox}>
          <IoClose
            className={styles["modal-sendler__close"]}
            onClick={onClose}
          />
          <p className={cssText}>{text}</p>
          <p className={styles["modal-sendler__text-thanks"]}>{thanks}</p>
        </div>
      </div>
    );
  }
);

export default memo(Modal);
