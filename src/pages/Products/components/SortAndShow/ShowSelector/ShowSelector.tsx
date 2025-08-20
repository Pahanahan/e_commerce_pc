import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { showCurrentsProducts } from "../../../../../redux/products/reducers";

import styles from "./ShowSelector.module.css";

enum ShowEnumValue {
  TEN = 10,
  TWENTY = 20,
  THIRTY = 30,
  FORTY = 40,
  FIFTY = 50,
  ALL = "All",
}

const showArray: (string | number)[] = [10, 20, 30, 40, 50, "All"];

function ShowSelector() {
  const [currentShow, setCurrentShow] = useState<ShowEnumValue>(
    ShowEnumValue.TEN
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleOverflowVisible = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  const handleChangeShow = (e: React.MouseEvent<HTMLDivElement>): void => {
    const datasetShow: string = e.currentTarget.dataset.show!;
    if (!datasetShow) return;
    if (datasetShow === ShowEnumValue.ALL) {
      setCurrentShow(datasetShow);
    } else {
      setCurrentShow(Number(datasetShow));
    }
  };

  useEffect(() => {
    dispatch(showCurrentsProducts(currentShow));
  }, [currentShow, dispatch]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles["show-box"]}`)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const optionItems = showArray.map((item) => (
    <div
      className={styles["show-box__option"]}
      onClick={handleChangeShow}
      data-show={item}
      key={item}
    >
      {item} per page
    </div>
  ));

  return (
    <div onClick={handleOverflowVisible} className={styles["show-box"]}>
      Show: <span>{currentShow} per page</span>
      <div
        className={styles["show-box__select"]}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {optionItems}
      </div>
    </div>
  );
}

export default ShowSelector;
