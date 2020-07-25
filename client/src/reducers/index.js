import { ADD_POST } from "../actions/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      const { id, title, subtitle, imgSrc, imgAlt } = action.payload;
      return {
        ...state,
        posts: [...state.posts, { id, title, subtitle, imgSrc, imgAlt }],
      };
    }

    default:
      return state;
  }
};

export default reducer;
