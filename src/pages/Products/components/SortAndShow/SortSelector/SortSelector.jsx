import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  sortName,
  sortPosition,
  sortPriceHigher,
  sortPriceLower,
  sortRating,
} from "../../../../../redux/products/actionCreators";

import styles from "./SortSelector.module.css";

const sortOptions = [
  "Position",
  "Name",
  "Price Lower",
  "Price Higher",
  "Rating",
];

function SortSelector() {
  const [sortBy, setSortBy] = useState("Position");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChangeSort = (e) => {
    const selected = e.target.dataset.sort;
    setSortBy(selected);

    switch (selected) {
      case "Position":
        dispatch(sortPosition(selected));
        break;
      case "Name":
        dispatch(sortName(selected));
        break;
      case "Price Higher":
        dispatch(sortPriceHigher(selected));
        break;
      case "Price Lower":
        dispatch(sortPriceLower(selected));
        break;
      case "Rating":
        dispatch(sortRating(selected));
        break;
      default:
        break;
    }
  };

  const handleOverflowVisible = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles["sort__by"]}`)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const optionItems = sortOptions.map((item) => (
    <div
      key={item}
      className={styles["sort__option"]}
      data-sort={item}
      onClick={handleChangeSort}
    >
      {item}
    </div>
  ));

  return (
    <div onClick={handleOverflowVisible} className={styles["sort__by"]}>
      Sort By: <span>{sortBy}</span>
      <div
        className={styles["sort__select"]}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {optionItems}
      </div>
    </div>
  );
}

export default SortSelector;
