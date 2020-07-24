import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
