import React, { Suspense } from "react";
import HeroSlider from "../components/HeroSlider";
import PetCategory from "./PetCategory";
import WinterCare from "../components/WinterCare";
import Experts from "../components/Experts";
import Extra from "../components/Extra";
import Footer from "../components/Footer";
import { Navigate } from "react-router";

const Home = () => {
  return (
    <div>
      <div className="mx-auto mt-3">
        <HeroSlider></HeroSlider>
        <Suspense
          fallback={
            <div>
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <PetCategory></PetCategory>
        </Suspense>
        <WinterCare></WinterCare>
        <Experts></Experts>
        <Extra></Extra>
      </div>
      {/* <div className="mx-auto mt-10">
        <Footer></Footer>
      </div> */}
    </div>
  );
};

export default Home;
