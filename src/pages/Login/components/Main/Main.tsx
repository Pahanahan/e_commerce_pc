import { useSelector } from "react-redux";

import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";
import OutLogin from "../OutLogin/OutLogin";
import { RootState } from "../../../../redux/store";
import { Login } from "../../../../types/types";

import styles from "./Main.module.css";

function Main() {
  const dataSelector: Login = useSelector((data: RootState) => data.login);

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
