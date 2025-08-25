import { Link } from "react-router-dom";

import logo from "../../assets/icons/logo.svg";
import styles from "./Logo.module.css";

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
