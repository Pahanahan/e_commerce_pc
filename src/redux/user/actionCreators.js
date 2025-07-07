import * as a from "./actionTypes";

const signIn = (login) => {
  return {
    type: a.SIGN_IN,
    payload: login,
  };
};

const logOut = () => {
  return {
    type: a.LOG_OUT,
    payload: "",
  };
};

export { signIn, logOut };
