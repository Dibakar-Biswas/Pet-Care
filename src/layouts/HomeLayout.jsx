import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Home from "../pages/Home";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="max-w-10/12 mx-auto">
      <header className="sticky top-0 h-fit z-50">
        <Header></Header>
      </header>

      <main className=" mx-auto my-3">
        <section className="main">
          <Outlet></Outlet>
        </section>
      </main>
      <Footer></Footer>
    </div>
    
  );
};

export default HomeLayout;
