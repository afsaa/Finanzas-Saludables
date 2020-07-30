import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";
import "../assets/styles/AddPost.scss";

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
    <>
      <div className="add-post">
        <div className="add-post__container">
          <h1 className="add-post__container--heading">Add Post</h1>
          <form
            className="add-post__container--form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="input"
              placeholder="Titulo"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="input"
              placeholder="Subtitulo"
              name="subtitle"
              value={subtitle}
              rows={5}
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <input
              className="input"
              placeholder="Url de la imagen"
              type="text"
              name="imgSrc"
              value={imgSrc}
              onChange={(e) => setImgSrc(e.target.value)}
            />
            <input
              className="input"
              placeholder="Texto descriptivo de la imagen"
              type="text"
              name="imgAlt"
              value={imgAlt}
              onChange={(e) => setImgAlt(e.target.value)}
            />
            <button className="button" type="submit">
              Add Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  addPost,
};

export default connect(null, mapDispatchToProps)(AddPost);
