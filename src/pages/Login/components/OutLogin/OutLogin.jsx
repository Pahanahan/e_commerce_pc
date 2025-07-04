import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../../../../redux/user/actionCreators";
import Button from "../../../../components/Button/Button";

import styles from "./OutLogin.module.css";

function OutLogin() {
  const dataSelector = useSelector((data) => data.login);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut(""));
    const editData = { ...dataSelector, isLogedIn: "" };
    localStorage.setItem("loginsAndPasswords", JSON.stringify(editData));
  };

  return (
    <div className={styles["out"]}>
      <h3>Are you sure you want to log out?</h3>
      <div className={styles["out__btn"]}>
        <Button onClick={handleLogOut} type="button" title="Log Out" />
      </div>
    </div>
  );
}

export default OutLogin;
