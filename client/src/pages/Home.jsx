import React from "react";

import FeaturedProd from "./featuredProd";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import TopPicks from "../component/product/TopPicks";
import NewArrival from "../component/product/NewArrival";
import Footer from "./Footer";
 

function Home() {


  return (
    <>
      <header className="">
        <div className="static h-[700px] bg-[#FBEBB5] md:h-[1000px]">
          <Navbar />

          <div className="container mx-auto">
            <section className="px-4 md:flex md:items-center md:justify-between">
              <div className="mb-5 md:mb-0 md:w-1/2">
                <h1 className="mb-4 text-3xl font-bold">
                  Rocket single seater{" "}
                </h1>
                <Link to={"/products"}>
                <span
                  className="inline-block border-b-2 border-black text-sm font-semibold hover:text-red-700"
                  >
                  shop now
                </span>
                  </Link>
              </div>
              <div className="flex justify-center md:w-1/2">
                <img src="../chai.png" className="h-[400px] md:h-[700px]" />
              </div>
            </section>
          </div>
        </div>
      </header>

      <FeaturedProd />

      <TopPicks/>
      <NewArrival/>
      <Footer/>
    </>
  );
}

export default Home;
