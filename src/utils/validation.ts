type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

const isValidEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const changeEmail = (
  e: React.ChangeEvent<HTMLInputElement>,
  setEmail: Setter<string>,
  setEmailValid: Setter<boolean>,
  setUserNotFound?: Setter<boolean>
) => {
  const newEmail: string = e.target.value.toLowerCase();
  setEmail(newEmail);
  if (setUserNotFound) {
    setUserNotFound(true);
  }

  if (!isValidEmail(newEmail)) {
    setEmailValid(false);
  } else {
    setEmailValid(true);
  }
};

const changePassword = (
  e: React.ChangeEvent<HTMLInputElement>,
  setPassword: Setter<string>,
  setPasswordValid: Setter<boolean>
) => {
  const newPassword = e.target.value;
  setPassword(newPassword);

  if (newPassword === "" || newPassword.length < 5) {
    setPasswordValid(false);
  } else {
    setPasswordValid(true);
  }
};

export { changeEmail, changePassword };
