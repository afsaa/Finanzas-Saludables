import React from "react";
import { connect } from "react-redux";
import { Hero } from "../Components/Hero";
import { Carousel } from "../Components/Carousel";
import { Benefits } from "../Components/Benefits";

function Home({ posts }: { posts?: any }) {
  return (
    <>
      <Hero />
      <Carousel posts={posts} />
      <Benefits />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    users: state.users,
    posts: state.posts,
  };
};

export default connect(mapStateToProps, null)(Home);
