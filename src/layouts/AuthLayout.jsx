import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className="max-w-10/12 mx-auto bg-base-200 min-h-screen">
      <header className="sticky top-0 h-fit z-50">
        <Header></Header>
      </header>
      <main className="max-w-10/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
