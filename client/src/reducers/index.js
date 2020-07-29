import { ADD_POST, LOGIN_REQUEST } from "../actions/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }

    case LOGIN_REQUEST: {
      return {
        ...state,
        loggedInUser: {
          ...state.users.filter(
            (user) =>
              user.email === action.payload.email &&
              user.password === action.payload.password
          ),
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
