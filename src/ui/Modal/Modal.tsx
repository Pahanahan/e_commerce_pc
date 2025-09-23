import { forwardRef, MouseEvent, memo } from "react";
import { IoClose } from "react-icons/io5";

import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  onBackdropClick: (e: MouseEvent<HTMLDivElement>) => void;
  text?: string;
  thanks?: string;
  error?: string;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ onClose, onBackdropClick, text, thanks }, ref) => {
    return (
      <div
        ref={ref}
        className={styles["modal-sendler"]}
        onClick={onBackdropClick}
      >
        <div className={styles["modal-sendler__box"]}>
          <IoClose
            className={styles["modal-sendler__close"]}
            onClick={onClose}
          />
          <p className={styles["modal-sendler__text"]}>{text}</p>
          <p className={styles["modal-sendler__text-thanks"]}>{thanks}</p>
        </div>
      </div>
    );
  }
);

export default memo(Modal);
