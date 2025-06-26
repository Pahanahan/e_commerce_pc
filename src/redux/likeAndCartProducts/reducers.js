import * as a from "./actionTypes";

const initialState = [];

const likeAndCartReducer = (state = initialState, action) => {
  if (action.type === a.ADD_LIKE) {
    return {
      ...state,
      like: action.payload,
    };
  }

  return state;
};

export default likeAndCartReducer;
