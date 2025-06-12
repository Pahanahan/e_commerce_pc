import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  sortName,
  sortPosition,
  sortPriceHigher,
  sortPriceLower,
  sortRating,
} from "../../../../../redux/products/actionCreators";

import styles from "./Sort.module.css";

function SortAndShow() {
  const [sortBy, setSortBy] = useState("Position");
  const [overflowSort, setOverflowSort] = useState("hidden");
  const dispatch = useDispatch();

  const sortOptions = [
    "Position",
    "Name",
    "Price Lower",
    "Price Higher",
    "Rating",
  ];

  const handleChangeSort = (e) => {
    const selected = e.target.dataset.sort;
    setSortBy(selected);

    switch (selected) {
      case "Position":
        dispatch(sortPosition(sortBy));
        break;
      case "Name":
        dispatch(sortName(sortBy));
        break;
      case "Price Higher":
        dispatch(sortPriceHigher(sortBy));
        break;
      case "Price Lower":
        dispatch(sortPriceLower(sortBy));
        break;
      case "Rating":
        dispatch(sortRating(sortBy));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles["sort-box__sort-by"]}`)) {
        setOverflowSort("hidden");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleOverflowVisible = () => {
    setOverflowSort((prevState) => {
      return prevState === "hidden" ? "visible" : "hidden";
    });
  };

  const optionsItems = sortOptions.map((item) => (
    <div
      key={item}
      className={styles["sort-box__sort-by-option"]}
      data-sort={item}
      onClick={handleChangeSort}
    >
      {item}
    </div>
  ));

  return (
    <div
      onClick={handleOverflowVisible}
      style={{ overflow: overflowSort }}
      className={styles["sort-box__sort-by"]}
    >
      Sort By: <span>{sortBy}</span>
      <div className={styles["sort-box__sort-by-select"]}>{optionsItems}</div>
    </div>
  );
}

export default SortAndShow;
