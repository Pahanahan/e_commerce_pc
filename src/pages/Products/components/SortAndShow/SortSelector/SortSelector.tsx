import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { sortByValue } from "../../../../../redux/products/reducers";
import { SortOptionsEnum } from "../../../../../types/types";

import styles from "./SortSelector.module.css";

const sortOptions = [
  "Position",
  "Name",
  "Price Lower",
  "Price Higher",
  "Rating",
];

function SortSelector() {
  const [sortBy, setSortBy] = useState<SortOptionsEnum>(
    SortOptionsEnum.POSITION
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleChangeSort = (e: React.MouseEvent<HTMLDivElement>) => {
    const selected = e.currentTarget.dataset.sort!;
    if (!selected) return;
    setSortBy(selected as SortOptionsEnum);

    switch (selected) {
      case SortOptionsEnum.POSITION:
        dispatch(sortByValue(SortOptionsEnum.POSITION));
        break;
      case SortOptionsEnum.NAME:
        dispatch(sortByValue(SortOptionsEnum.NAME));
        break;
      case SortOptionsEnum.PRICE_HIGHER:
        dispatch(sortByValue(SortOptionsEnum.PRICE_HIGHER));
        break;
      case SortOptionsEnum.PRICE_LOWER:
        dispatch(sortByValue(SortOptionsEnum.PRICE_LOWER));
        break;
      case SortOptionsEnum.RATING:
        dispatch(sortByValue(SortOptionsEnum.RATING));
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
