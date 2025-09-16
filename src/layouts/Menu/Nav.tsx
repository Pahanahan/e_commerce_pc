import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  addFilter,
  applyFilters,
  deleteFilters,
} from "../../redux/products/reducers";
import { scrollTop } from "../../utils/scrollTop";
import { navData } from "../../data/nav-data";

import styles from "./Nav.module.css";

function Nav() {
  const dispatch = useDispatch();
  const handleAddFilterApplyFilters = (filter: string): void => {
    dispatch(deleteFilters());
    dispatch(addFilter({ type: "category", value: filter }));
    dispatch(applyFilters());
    scrollTop();
  };

  const linksMap = navData.map((item) => (
    <Link
      onClick={() => handleAddFilterApplyFilters(item.filter)}
      key={item.id}
      to="/products"
      className={styles["nav__link"]}
    >
      {item.text}
    </Link>
  ));

  return (
    <div className={styles["nav"]}>
      <div>
        <div className={styles["nav__items"]}>{linksMap}</div>
      </div>
    </div>
  );
}

export default Nav;
