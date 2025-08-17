import { useLocation } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";

import styles from "./Breadcrumbs.module.css";

function Breadcrumbs() {
  const location = useLocation();

  const breadcrumbLocation =
    location.pathname.slice(1, 2).toUpperCase() + location.pathname.slice(2);

  return (
    <div className={styles["breadcrumbs"]}>
      <div className="container">
        <div className={styles["breadcrubms__inner"]}>
          <a href="#">Home</a>
          <span style={{ color: "#0156FF" }}>
            <RiArrowDropRightLine />
          </span>
          <span>{breadcrumbLocation}</span>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
