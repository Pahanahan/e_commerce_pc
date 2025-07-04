import * as a from "./actionTypes";

const initialState =
  JSON.parse(localStorage.getItem("loginsAndPasswords")) || [];
console.log(initialState);

const loginReducer = (state = initialState, action) => {
  if (action.type === a.SIGN_IN) {
    return {
      ...state,
      loginsAndPasswords: action.payload,
    };
  }
  if (action.type === a.LOG_OUT) {
    return {
      ...state,
      isLogedIn: "",
    };
  }

  return state;
};

export { loginReducer };

// key: loginsAndPasswords
// value: {"isLogedIn":"korgfd@yandex.ru","users":[{"login":"korgfd@yandex.ru","password":"korsunenko1"}]}
