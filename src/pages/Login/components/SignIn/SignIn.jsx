import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signIn } from "../../../../redux/user/actionCreators";
import Button from "../../../../components/Button/Button";

import styles from "./SignIn.module.css";

const isValidEmail = (value) => {
  return /\S+@\S+\.\S+/.test(value);
};

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

  const changeEmail = (e) => {
    const newEmail = e.target.value.toLowerCase();
    setEmail(newEmail);
    setUserNotFound(true);

    if (!isValidEmail(newEmail)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  const changePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword === "" || newPassword.length < 5) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };

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

  return (
    <div className={styles["sign-in"]}>
      <h3>Registered Customers</h3>
      <p className={styles["sign-in__text"]}>
        If you have an account, sign in with your email address.
      </p>
      <form onSubmit={handleSubmitForm} className={styles["sign-in__form"]}>
        <label className={styles["sign-in__label"]}>
          <span className={styles["sign-in__label-text"]}>Email</span>
          {!emailValid ? <span style={{ color: "red" }}> *</span> : ""}
          <input
            onChange={(e) => changeEmail(e)}
            value={email}
            ref={emailRef}
            className={`${styles["sign-in__input"]} ${
              !emailValid && email ? styles.invalid : ""
            }`}
            name="email"
            type="email"
            placeholder="Your email"
          />
        </label>
        {!correctEmail && (
          <div className={styles["sign-in__incorrect"]}>Incorrect Email!</div>
        )}
        <label className={styles["sign-in__label"]}>
          <span className={styles["sign-in__label-text"]}>Password</span>
          {!passwordValid ? <span style={{ color: "red" }}> *</span> : ""}
          <input
            onChange={(e) => changePassword(e)}
            value={password}
            ref={passwordRef}
            className={`${styles["sign-in__input"]} ${
              !passwordValid && password ? styles.invalid : ""
            }`}
            name="password"
            type="password"
            placeholder="Your password"
          />
        </label>
        {!correctPassword && (
          <div className={styles["sign-in__incorrect"]}>
            Password too little!
          </div>
        )}
        {!userNotFound && (
          <div className={styles["sign-in__incorrect"]}>User Not Found!</div>
        )}
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
