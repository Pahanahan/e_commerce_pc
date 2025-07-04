import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";

import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles["main"]}>
      <div className="container">
        <div className={styles["main__inner"]}>
          <SignIn />
          <Register />
        </div>
      </div>
    </div>
  );
}

export default Main;
