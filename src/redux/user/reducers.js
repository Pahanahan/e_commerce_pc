import * as a from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("loginsAndPasswords")) || {
  isLogedIn: "",
  users: [],
};

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

  return state;
};

export { loginReducer };

// key: loginsAndPasswords
// value: {"isLogedIn":"korgfd@yandex.ru","users":[{"login":"korgfd@yandex.ru","password":"korsunenko1"}]}
