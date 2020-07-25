import { ADD_POST } from "./actionTypes";

let nextPostId = 4;

export const addPost = (title, subtitle, imgSrc, imgAlt) => ({
  type: ADD_POST,
  payload: {
    id: ++nextPostId,
    title: title,
    subtitle: subtitle,
    imgSrc: imgSrc,
    imgAlt: imgAlt,
  },
});
