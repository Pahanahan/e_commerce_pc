import { useSelector } from "react-redux";

import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";
import OutLogin from "../OutLogin/OutLogin";

import styles from "./Main.module.css";

function Main() {
  const dataSelector = useSelector((data) => data.login);

  return (
    <div className={styles["main"]}>
      <div className="container">
        {dataSelector.isLogedIn ? (
          <div className={styles["main__inner"]}>
            <OutLogin />
          </div>
        ) : (
          <div className={styles["main__inner"]}>
            <SignIn />
            <Register />
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
