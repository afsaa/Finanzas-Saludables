import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";

function AddPost(props: any) {
  type PostCard = {
    title: string;
    subtitle: string;
    imgSrc: string;
    imgAlt: string;
  };

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [imgAlt, setImgAlt] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const post: PostCard = { title, subtitle, imgSrc, imgAlt };
    props.addPost(post);
    setTitle("");
    setSubtitle("");
    setImgSrc("");
    setImgAlt("");
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="subtitle">Subtitle</label>
        <input
          type="text"
          name="subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <label htmlFor="imgSrc">Image source</label>
        <input
          type="text"
          name="imgSrc"
          value={imgSrc}
          onChange={(e) => setImgSrc(e.target.value)}
        />
        <label htmlFor="imgAlt">Image alt</label>
        <input
          type="text"
          name="imgAlt"
          value={imgAlt}
          onChange={(e) => setImgAlt(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  addPost,
};

export default connect(null, mapDispatchToProps)(AddPost);
