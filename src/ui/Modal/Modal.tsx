import { forwardRef, MouseEvent, memo } from "react";
import { IoClose } from "react-icons/io5";

import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  onBackdropClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ onClose, onBackdropClick }, ref) => {
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
          <p className={styles["modal-sendler__text"]}>Message Send</p>
          <p className={styles["modal-sendler__text-thanks"]}>
            Thank you for your message!
          </p>
        </div>
      </div>
    );
  }
);

export default memo(Modal);
