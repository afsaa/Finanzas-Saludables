import React from "react";
import { Hero } from "../Components/Hero";
import { Header } from "../Components/Header";
import "../assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
