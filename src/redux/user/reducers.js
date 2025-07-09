import * as a from "./actionTypes";
import { getItemLocalStorage } from "../../utils/storageUtils";

const initialState = getItemLocalStorage("loginsAndPasswords", {
  isLogedIn: "",
  users: [],
});

const loginReducer = (state = initialState, action) => {
  if (action.type === a.SIGN_IN) {
    return {
      ...state,
      isLogedIn: action.payload,
    };
  }
  if (action.type === a.LOG_OUT) {
    return {
      ...state,
      isLogedIn: "",
    };
  }
  if (action.type === a.CREATE_ACCOUNT) {
    return {
      ...state,
      ...action.payload,
    };
  }
  if (action.type === a.TOGGLE_LIKE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};

export { loginReducer };
