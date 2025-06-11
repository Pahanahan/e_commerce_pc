import { Link } from "react-router-dom";

import styles from "./Logo.module.css";
import logo from "../../assets/icons/logo.svg";

function Logo() {
  return (
    <div className={styles["logo"]}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
