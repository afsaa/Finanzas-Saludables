import { ADD_POST } from "../actions/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }

    default:
      return state;
  }
};

export default reducer;
