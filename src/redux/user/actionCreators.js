import * as a from "./actionTypes";

const signIn = (obj) => {
  return {
    type: a.SIGN_IN,
    payload: obj,
  };
};

const logOut = () => {
  return {
    type: a.LOG_OUT,
    payload: "",
  };
};

export { signIn, logOut };
