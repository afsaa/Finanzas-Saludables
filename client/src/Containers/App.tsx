import React from "react";
import { Hero } from "../Components/Hero";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Login } from "../Components/Login";
import "../assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
