const isValidEmail = (value) => {
  return /\S+@\S+\.\S+/.test(value);
};

const changeEmail = (e, setEmail, setEmailValid, setUserNotFound) => {
  const newEmail = e.target.value.toLowerCase();
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

const changePassword = (e, setPassword, setPasswordValid) => {
  const newPassword = e.target.value;
  setPassword(newPassword);

  if (newPassword === "" || newPassword.length < 5) {
    setPasswordValid(false);
  } else {
    setPasswordValid(true);
  }
};

export { changeEmail, changePassword };
