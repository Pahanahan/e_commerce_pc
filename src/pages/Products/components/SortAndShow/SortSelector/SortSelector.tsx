import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  sortByValue,
  SortOptions,
} from "../../../../../redux/products/reducers";

import styles from "./SortSelector.module.css";

const sortOptions = [
  "Position",
  "Name",
  "Price Lower",
  "Price Higher",
  "Rating",
];

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
        dispatch(sortByValue(SortOptions.POSITION));
        break;
      case SortOptions.NAME:
        dispatch(sortByValue(SortOptions.NAME));
        break;
      case SortOptions.PRICE_HIGHER:
        dispatch(sortByValue(SortOptions.PRICE_HIGHER));
        break;
      case SortOptions.PRICE_LOWER:
        dispatch(sortByValue(SortOptions.PRICE_LOWER));
        break;
      case SortOptions.RATING:
        dispatch(sortByValue(SortOptions.RATING));
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
