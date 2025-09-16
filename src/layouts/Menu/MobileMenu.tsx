import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

import {
  addFilter,
  applyFilters,
  deleteFilters,
} from "../../redux/products/reducers";
import { scrollTop } from "../../utils/scrollTop";
import useClickOutside from "../../customHooks/useClickOutside";
import { navData } from "../../data/nav-data";

import styles from "./MobileMenu.module.css";

function MobileMenu() {
  const [hideNav, setHideNav] = useState<boolean>(true);
  const btnRef = useRef(null);
  const dispatch = useDispatch();

  const handleAddFilterApplyFilters = (filter: string): void => {
    dispatch(deleteFilters());
    dispatch(addFilter({ type: "category", value: filter }));
    dispatch(applyFilters());
    setHideNav(true);
    scrollTop();
  };

  const linksMap = navData.map((item) => (
    <Link
      onClick={() => handleAddFilterApplyFilters(item.filter)}
      key={item.id}
      to="/products"
      className={styles["mobile-menu__link"]}
    >
      {item.text}
    </Link>
  ));

  useClickOutside(
    setHideNav,
    `.${styles["burger"]}`,
    true,
    `.${styles["mobile-menu__items"]}`
  );

  return (
    <div className={styles["mobile-menu"]}>
      <div
        ref={btnRef}
        onClick={() => setHideNav(!hideNav)}
        className={styles["burger"]}
      >
        <MdOutlineMenu fontSize="24px" />
      </div>
      <div
        className={`${styles["mobile-menu__items"]} ${
          hideNav ? styles["mobile-menu__items--hidden"] : ""
        }`}
      >
        {linksMap}
      </div>
    </div>
  );
}

export default MobileMenu;
