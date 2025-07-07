import { useState } from "react";

import Button from "../../../../components/Button/Button";

import styles from "./Register.module.css";

function Register() {
  const [createAccount, setCreateAccount] = useState(false);

  return (
    <div className={styles["register"]}>
      <h3>New Customer?</h3>
      <p>Creating an account has many benefits:</p>
      {createAccount ? (
        <form className={styles["register__form"]}>
          <label className={styles["register__label"]}>
            <span className={styles["register__label-text"]}>Email</span>
            {/* {!emailValid ? <span style={{ color: "red" }}> *</span> : ""} */}
            <input
              // onChange={(e) => changeEmail(e)}
              // value={email}
              // ref={emailRef}
              className={styles["register__input"]}
              name="email"
              type="email"
              placeholder="Your email"
            />
          </label>
          {/* {!correctEmail && (
            <div className={styles["sign-in__incorrect"]}>Incorrect Email!</div>
          )} */}
          <label className={styles["register__label"]}>
            <span className={styles["register__label-text"]}>Password</span>
            {/* {!passwordValid ? <span style={{ color: "red" }}> *</span> : ""} */}
            <input
              // onChange={(e) => changePassword(e)}
              // value={password}
              // ref={passwordRef}
              className={styles["register__input"]}
              name="password"
              type="password"
              placeholder="Your password"
            />
          </label>
          <label className={styles["register__label"]}>
            <span className={styles["register__label-text"]}>
              Confirm Password
            </span>
            {/* {!passwordValid ? <span style={{ color: "red" }}> *</span> : ""} */}
            <input
              // onChange={(e) => changePassword(e)}
              // value={password}
              // ref={passwordRef}
              className={styles["register__input"]}
              name="confirm password"
              type="password"
              placeholder="Confirm password"
            />
          </label>
          {/* {!correctPassword && (
            <div className={styles["sign-in__incorrect"]}>
              Password too little!
            </div>
          )}
          {!userNotFound && (
            <div className={styles["sign-in__incorrect"]}>User Not Found!</div>
          )} */}
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
