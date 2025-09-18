type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

const isValidEmail = (value: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const isValidPhone = (value: string): boolean => {
  return /^\+[0-9]{6,15}$/.test(value);
};

const isValidName = (value: string): boolean => {
  return /^[A-Za-zА-Яа-яёЁ\s-]{2,30}$/.test(value);
};

const isValidTextArea = (value: string): boolean => {
  return /^.{2,500}$/.test(value);
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

const changeName = (
  e: React.ChangeEvent<HTMLInputElement>,
  setName: Setter<string>,
  setNameValid: Setter<boolean>
) => {
  const newName = e.target.value;
  setName(newName);

  if (!isValidName || !newName.trim() || newName.length <= 1) {
    setNameValid(false);
  } else {
    setNameValid(true);
  }
};

const changePhone = (
  e: React.ChangeEvent<HTMLInputElement>,
  setPhone: Setter<string>,
  setPhoneValid: Setter<boolean>
) => {
  const newPhone = e.target.value;
  setPhone(newPhone);

  if (!isValidPhone || !newPhone.trim()) {
    setPhoneValid(false);
  } else {
    setPhoneValid(true);
  }
};

const changeTextarea = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  setTextarea: Setter<string>,
  setTextareaValid: Setter<boolean>
) => {
  const newTextarea = e.target.value;
  setTextarea(newTextarea);

  if (!isValidTextArea || !newTextarea.trim() || newTextarea.length <= 1) {
    setTextareaValid(false);
  } else {
    setTextareaValid(true);
  }
};

export { changeEmail, changePassword, changeName, changePhone, changeTextarea };
