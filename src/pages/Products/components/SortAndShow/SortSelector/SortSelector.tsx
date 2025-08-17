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

enum SortOptions {
  POSITION = "Position",
  NAME = "Name",
  PRICE_LOWER = "Price Lower",
  PRICE_HIGHER = "Price Higher",
  RATING = "Rating",
}

function SortSelector() {
  const [sortBy, setSortBy] = useState<SortOptions>(SortOptions.POSITION);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleChangeSort = (e: React.MouseEvent<HTMLDivElement>) => {
    const selected = e.currentTarget.dataset.sort!;
    if (!selected) return;
    setSortBy(selected as SortOptions);

    switch (selected) {
      case SortOptions.POSITION:
        dispatch(sortPosition());
        break;
      case SortOptions.NAME:
        dispatch(sortName());
        break;
      case SortOptions.PRICE_HIGHER:
        dispatch(sortPriceHigher());
        break;
      case SortOptions.PRICE_LOWER:
        dispatch(sortPriceLower());
        break;
      case SortOptions.RATING:
        dispatch(sortRating());
        break;
      default:
        break;
    }
  };

  const handleOverflowVisible = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles["sort__by"]}`)) {
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
