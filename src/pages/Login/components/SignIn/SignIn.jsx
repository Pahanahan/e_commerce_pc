import { useState, useRef, useEffect } from "react";

import Button from "../../../../components/Button/Button";

import styles from "./SignIn.module.css";

function SignIn() {
  // const [isLogedIn, setIsLogedIn] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const changeEmail = (e) => {
    const newEmail = e.target.value.toLowerCase();
    setEmail(newEmail);

    const isValidEmail = (value) => {
      return /\S+@\S+\.\S+/.test(value);
    };

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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!emailValid) {
      emailRef.current.focus();
    } else if (!passwordValid) {
      passwordRef.current.focus();
    }
  };

  useEffect(() => {
    const loginAndPassword = JSON.parse(
      localStorage.getItem("loginsAndPasswords")
    );
    console.log(loginAndPassword);
    // const loginAndPassword = JSON.parse(
    //   localStorage.getItem("loginsAndPasswords")
    // );
    // console.log(loginAndPassword);
  }, []);

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
