import React from "react";
import { Hero } from "../Components/Hero";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "../assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
