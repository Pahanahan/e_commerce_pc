import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showCurrentsProducts } from "../../../../../redux/products/actionCreators";

import styles from "./ShowSelector.module.css";

function ShowSelector() {
  const [currentShow, setCurrentShow] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const showArray = [10, 20, 30, 40, 50, "All"];

  const handleOverflowVisible = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleChangeShow = (e) => {
    setCurrentShow(e.target.dataset.show);
  };

  useEffect(() => {
    dispatch(showCurrentsProducts(currentShow));
  }, [currentShow, dispatch]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles["show-box"]}`)) {
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
