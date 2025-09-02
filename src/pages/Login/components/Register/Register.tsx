import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../components/Button/Button";
import { changeEmail, changePassword } from "../../../../utils/validation";
import { scrollTop } from "../../../../utils/scrollTop";
import { register } from "../../../../redux/user/reducers";
import { RootState } from "../../../../redux/store";
import { Login, User } from "../../../../types/types";

import styles from "./Register.module.css";

function Register() {
  const [createAccount, setCreateAccount] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [passwordConfirmValid, setPasswordConfirmValid] =
    useState<boolean>(false);

  const [correctEmail, setCorrectEmail] = useState<boolean>(true);
  const [correctPassword, setCorrectPassword] = useState<boolean>(true);
  const [correctConfirmPassword, setCorrectConfirmPassword] =
    useState<boolean>(true);

  const [overlapPasswords, setOverlapPasswords] = useState<boolean>(true);
  const [unicEmail, setUnicEmail] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);

  const usersSelector: Login = useSelector((state: RootState) => state.login);
  const users: Login = JSON.parse(JSON.stringify(usersSelector));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setOverlapPasswords(false);
    setUnicEmail(false);

    if (!emailValid && !passwordValid && !passwordConfirmValid) {
      if (emailRef.current) {
        emailRef.current.focus();
        setCorrectEmail(false);
        setCorrectPassword(false);
        setCorrectConfirmPassword(false);
      }
    } else if (!emailValid && !passwordValid) {
      if (emailRef.current) {
        emailRef.current.focus();
        setCorrectEmail(false);
        setCorrectPassword(false);
        setCorrectConfirmPassword(true);
      }
    } else if (!emailValid && !passwordConfirmValid) {
      if (emailRef.current) {
        emailRef.current.focus();
        setCorrectEmail(false);
        setCorrectPassword(true);
        setCorrectConfirmPassword(false);
      }
    } else if (!passwordValid && !passwordConfirmValid) {
      if (passwordRef.current) {
        passwordRef.current.focus();
        setCorrectEmail(true);
        setCorrectPassword(false);
        setCorrectConfirmPassword(false);
      }
    } else if (!passwordValid) {
      if (passwordRef.current) {
        passwordRef.current.focus();
        setCorrectEmail(true);
        setCorrectPassword(false);
        setCorrectConfirmPassword(true);
      }
    } else if (!passwordConfirmValid) {
      if (passwordConfirmRef.current) {
        passwordConfirmRef.current.focus();
        setCorrectEmail(true);
        setCorrectPassword(true);
        setCorrectConfirmPassword(false);
      }
    } else if (!emailValid) {
      if (emailRef.current) {
        emailRef.current.focus();
        setCorrectEmail(false);
        setCorrectPassword(true);
        setCorrectConfirmPassword(true);
      }
    } else if (emailValid && passwordValid && passwordConfirmValid) {
      setCorrectEmail(true);
      setCorrectPassword(true);
      setCorrectConfirmPassword(true);
      if (password !== confirmPassword) {
        setOverlapPasswords(false);
      } else if (password === confirmPassword) {
        setOverlapPasswords(true);

        const findUnicEmail = users.users.find((user) => user.login === email);

        if (findUnicEmail) {
          setUnicEmail(true);
        } else {
          setUnicEmail(false);
          const newUser: User = {
            login: email,
            password: password,
            likes: [],
            cart: [],
          };
          users.isLogedIn = email;
          users.users.push(newUser);
          dispatch(register(users));
          scrollTop();
          navigate("/");
        }
      }
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeEmail(e, setEmail, setEmailValid);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    changePassword(e, setPassword, setPasswordValid);
  };

  const handleChangeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const classNameConfirmPasswordValid = !passwordConfirmValid ? (
    <span style={{ color: "red" }}> *</span>
  ) : (
    ""
  );

  const incorrectEmailMessage = !correctEmail && (
    <div className={styles["register__incorrect"]}>
      Please enter a valid email address.
    </div>
  );

  const incorrectPasswordMessage = !correctPassword && (
    <div className={styles["register__incorrect"]}>Password is too short.</div>
  );

  const incorrectConfirmPasswordMessage = !correctConfirmPassword && (
    <div className={styles["register__incorrect"]}>
      Confirm password is too short.
    </div>
  );

  const incorrectOverlapPasswordsMessage = !overlapPasswords && (
    <div className={styles["register__incorrect"]}>Passwords do not match.</div>
  );

  const incorrectUnicEmail = unicEmail && (
    <div className={styles["register__incorrect"]}>
      An account with this email already exists.
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
          {incorrectConfirmPasswordMessage}
          {incorrectOverlapPasswordsMessage}
          {incorrectUnicEmail}
          <div className={styles["register__btns"]}>
            <Button type={"submit"} title={"Create An Account"} />
          </div>
        </form>
      ) : (
        <>
          <ul>
            <li>Cheсk out faster</li>
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
