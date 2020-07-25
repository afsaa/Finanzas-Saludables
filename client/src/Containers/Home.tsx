import React from "react";
import { connect } from "react-redux";
import { Hero } from "../Components/Hero";
import { Carousel } from "../Components/Carousel";

function Home({ posts }: { posts?: any }) {
  return (
    <>
      <Hero />
      <Carousel posts={posts} />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    posts: state.posts,
  };
};

export default connect(mapStateToProps, null)(Home);
