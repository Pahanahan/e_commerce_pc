import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../../../../components/Button/Button";
import { signIn } from "../../../../redux/user/actionCreators";
import { changeEmail, changePassword } from "../../../../utils/validation";

import styles from "./SignIn.module.css";

function SignIn() {
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNotFound, setUserNotFound] = useState(true);
  const [correctEmail, setCorrectEmail] = useState(true);
  const [correctPassword, setCorrectPassword] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!emailValid && !passwordValid) {
        emailRef.current.focus();
        setCorrectEmail(false);
        setCorrectPassword(false);
        setUserNotFound(true);
      } else if (!emailValid) {
        emailRef.current.focus();
        setCorrectEmail(false);
        setCorrectPassword(true);
        setUserNotFound(true);
      } else if (!passwordValid) {
        passwordRef.current.focus();
        setCorrectPassword(false);
        setCorrectEmail(true);
        setUserNotFound(true);
      } else if (emailValid && passwordValid) {
        setCorrectEmail(true);
        setCorrectPassword(true);
        setUserNotFound(true);
        const loginsAndPasswords = JSON.parse(
          localStorage.getItem("loginsAndPasswords")
        ) || {
          isLogedIn: "",
          users: [],
        };

        const findedLogin = loginsAndPasswords.users.find(
          (user) => user.login === email
        );

        if (!findedLogin) {
          setUserNotFound(false);
          return;
        }

        if (findedLogin.password !== password) {
          setUserNotFound(false);
          return;
        }

        const newLocalStorage = { ...loginsAndPasswords, isLogedIn: email };
        localStorage.setItem(
          "loginsAndPasswords",
          JSON.stringify(newLocalStorage)
        );
        setUserNotFound(true);
        dispatch(signIn(email));
        navigate("/");
      }
    },
    [email, password, emailValid, passwordValid, dispatch, navigate]
  );

  const handleChangeEmail = (e) => {
    changeEmail(e, setEmail, setUserNotFound, setEmailValid);
  };

  const handleChangePassword = (e) => {
    changePassword(e, setPassword, setPasswordValid);
  };

  const classNameInputEmail = `${styles["sign-in__input"]} ${
    !emailValid && email ? styles.invalid : ""
  }`;

  const classNameInputPassword = `${styles["sign-in__input"]} ${
    !passwordValid && password ? styles.invalid : ""
  }`;

  const classNameEmailValid = !emailValid ? (
    <span style={{ color: "red" }}> *</span>
  ) : (
    ""
  );

  const classNamePasswordValid = !passwordValid ? (
    <span style={{ color: "red" }}> *</span>
  ) : (
    ""
  );

  const incorrectEmailMessage = !correctEmail && (
    <div className={styles["sign-in__incorrect"]}>Incorrect Email!</div>
  );

  const incorrectPasswordMessage = !correctPassword && (
    <div className={styles["sign-in__incorrect"]}>Password too little!</div>
  );

  const notFoundMessage = !userNotFound && (
    <div className={styles["sign-in__incorrect"]}>User Not Found!</div>
  );

  return (
    <div className={styles["sign-in"]}>
      <h3>Registered Customers</h3>
      <p className={styles["sign-in__text"]}>
        If you have an account, sign in with your email address.
      </p>
      <form onSubmit={handleSubmitForm} className={styles["sign-in__form"]}>
        <label className={styles["sign-in__label"]}>
          <span className={styles["sign-in__label-text"]}>Email</span>
          {classNameEmailValid}
          <input
            onChange={handleChangeEmail}
            value={email}
            ref={emailRef}
            className={classNameInputEmail}
            name="email"
            type="email"
            placeholder="Your email"
          />
        </label>
        {incorrectEmailMessage}
        <label className={styles["sign-in__label"]}>
          <span className={styles["sign-in__label-text"]}>Password</span>
          {classNamePasswordValid}
          <input
            onChange={handleChangePassword}
            value={password}
            ref={passwordRef}
            className={classNameInputPassword}
            name="password"
            type="password"
            placeholder="Your password"
          />
        </label>
        {incorrectPasswordMessage}
        {notFoundMessage}
        <div className={styles["sign-in__btns"]}>
          <Button type={"submit"} title={"Sign In"} />
          <button type="button" className={styles["sign-in__forgot-btn"]}>
            Forgot Your Password?
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
