import { memo, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";

import firstLetterUpperCase from "../../utils/firstLetterUpperCase/firstLetterUpperCase";

import styles from "./Breadcrumbs.module.css";

interface Location {
  pathname: string;
}

const Breadcrumbs = memo(function Breadcrumbs() {
  const location: Location = useLocation();

  const pathParts: string[] = location.pathname.split("/").slice(1);

  const pathPartsMap = useMemo(
    () =>
      pathParts.map((str, i) => {
        if (str === "products" && pathParts.length > 1) {
          return (
            <div key={i} className={styles["breadcrumbs__item"]}>
              <Link to="/products">Products</Link>
              <span style={{ color: "#0156FF" }}>
                <RiArrowDropRightLine />
              </span>
            </div>
          );
        } else if (str === "products" && pathParts.length === 1) {
          return (
            <div key={i} className={styles["breadcrumbs__item"]}>
              <span className={styles["breadcrumbs__span"]}>Products</span>
            </div>
          );
        } else {
          return (
            <div key={i} className={styles["breadcrumbs__item"]}>
              <span className={styles["breadcrumbs__span"]}>
                {firstLetterUpperCase(str)}
              </span>
            </div>
          );
        }
      }),
    [location]
  );

  return (
    <div className={styles["breadcrumbs"]}>
      <div className={styles["breadcrumbs__inner"]}>
        <div className={styles["breadcrumbs__item"]}>
          <Link to="/">Home</Link>
          <span style={{ color: "#0156FF" }}>
            <RiArrowDropRightLine />
          </span>
        </div>
        {pathPartsMap}
      </div>
    </div>
  );
});

export default Breadcrumbs;
