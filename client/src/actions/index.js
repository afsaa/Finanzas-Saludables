import { ADD_POST, LOGIN_REQUEST } from "./actionTypes";

let nextPostId = 4;

export const addPost = ({ title, subtitle, imgSrc, imgAlt }) => ({
  type: ADD_POST,
  payload: {
    id: ++nextPostId,
    title: title,
    subtitle: subtitle,
    imgSrc: imgSrc,
    imgAlt: imgAlt,
  },
});

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});
