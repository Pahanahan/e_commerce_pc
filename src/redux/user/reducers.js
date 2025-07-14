import * as a from "./actionTypes";

const savedData = localStorage.getItem("loginsAndPasswords");

const initialState = savedData
  ? JSON.parse(savedData)
  : {
      isLogedIn: "",
      users: [],
    };

const loginReducer = (state = initialState, action) => {
  let newState = state;

  if (action.type === a.SIGN_IN) {
    newState = {
      ...state,
      isLogedIn: action.payload,
    };
  }
  if (action.type === a.LOG_OUT) {
    newState = {
      ...state,
      isLogedIn: "",
    };
  }
  if (action.type === a.CREATE_ACCOUNT) {
    newState = {
      ...state,
      ...action.payload,
    };
  }
  if (action.type === a.TOGGLE_LIKE) {
    const { login, productId } = action.payload;

    newState = {
      ...state,
      users: state.users.map((user) => {
        if (user.login !== login) return user;

        const alreadyLiked = user?.likes.includes(productId);

        return {
          ...user,
          likes: alreadyLiked
            ? user.likes.filter((id) => id !== productId)
            : [...user.likes, productId],
        };
      }),
    };
  }
  if (action.type === a.ADD_TO_CART) {
    const { login, productId } = action.payload;

    newState = {
      ...state,
      users: state.users.map((user) => {
        if (user.login !== login) return user;

        const alreadyCart = user?.cart.includes(productId);

        return {
          ...user,
          cart: alreadyCart
            ? user.cart.filter((id) => id !== productId)
            : [...user.cart, productId],
        };
      }),
    };
  }

  localStorage.setItem("loginsAndPasswords", JSON.stringify(newState));

  return newState;
};

export { loginReducer };
