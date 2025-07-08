import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

import Button from "../../../../components/Button/Button";
import { changeEmail, changePassword } from "../../../../utils/validation";

import styles from "./Register.module.css";

function Register() {
  const [createAccount, setCreateAccount] = useState(false);

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [correctEmail, setCorrectEmail] = useState(true);
  const [correctPassword, setCorrectPassword] = useState(true);
  const [correctConfirmPassword, setCorrectConfirmPassword] = useState(true);
  const [overlapPasswords, setOverlapPasswords] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!emailValid && !passwordValid) {
      emailRef.current.focus();
      setCorrectEmail(false);
      setCorrectPassword(false);
    } else if (!emailValid) {
      emailRef.current.focus();
      setCorrectEmail(false);
      setCorrectPassword(true);
    } else if (!passwordValid) {
      passwordRef.current.focus();
      setCorrectPassword(false);
      setCorrectEmail(true);
    } else if (emailValid && passwordValid) {
      setCorrectEmail(true);
      setCorrectPassword(true);
      if (password !== confirmPassword) {
        setPasswordValid(false);
        setPasswordConfirmValid(false);
        setOverlapPasswords(false);
      } else {
        setOverlapPasswords(true);
      }
      console.log(overlapPasswords);
    }
  };

  const handleChangeEmail = (e) => {
    changeEmail(e, setEmail, setEmailValid);
  };

  const handleChangePassword = (e) => {
    changePassword(e, setPassword, setPasswordValid);
  };

  const handleChangeConfirmPassword = (e) => {
    changePassword(e, setConfirmPassword, setPasswordConfirmValid);
  };

  const classNameInputEmail = `${styles["register__input"]} ${
    !emailValid && email ? styles.invalid : ""
  }`;

  const classNameInputPassword = `${styles["register__input"]} ${
    !passwordValid && password ? styles.invalid : ""
  }`;

  const classNameInputConfirmPassword = `${styles["register__input"]} ${
    !passwordConfirmValid && confirmPassword ? styles.invalid : ""
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

  const classNameConfirmPasswordValid = !passwordValid ? (
    <span style={{ color: "red" }}> *</span>
  ) : (
    ""
  );

  const incorrectEmailMessage = !correctEmail && (
    <div className={styles["register__incorrect"]}>Incorrect Email!</div>
  );

  const incorrectPasswordMessage = !correctPassword && (
    <div className={styles["register__incorrect"]}>Password too little!</div>
  );

  const incorrectOverlapPasswordsMessage = !overlapPasswords && (
    <div className={styles["register__incorrect"]}>
      Passwords not confirmed!
    </div>
  );

  return (
    <div className={styles["register"]}>
      <h3>New Customer?</h3>
      <p>Creating an account has many benefits:</p>
      {createAccount ? (
        <form onSubmit={handleSubmitForm} className={styles["register__form"]}>
          <label className={styles["register__label"]}>
            <span className={styles["register__label-text"]}>Email</span>
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
          <label className={styles["register__label"]}>
            <span className={styles["register__label-text"]}>Password</span>
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
          <label className={styles["register__label"]}>
            <span className={styles["register__label-text"]}>
              Confirm Password
            </span>
            {classNameConfirmPasswordValid}
            <input
              onChange={handleChangeConfirmPassword}
              value={confirmPassword}
              ref={passwordConfirmRef}
              className={classNameInputConfirmPassword}
              name="confirm password"
              type="password"
              placeholder="Confirm password"
            />
          </label>
          {incorrectOverlapPasswordsMessage}
          <div className={styles["register__btns"]}>
            <Button type={"submit"} title={"Create An Account"} />
          </div>
        </form>
      ) : (
        <>
          <ul>
            <li>Chek out faster</li>
            <li>Keep more than one address</li>
            <li>Track orders and more</li>
          </ul>
          <Button
            onClick={() => setCreateAccount(true)}
            type={"button"}
            title={"Create An Account"}
          />
        </>
      )}
    </div>
  );
}

export default Register;
