import React from "react";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { CiSearch, CiHeart, CiShoppingCart ,CiMenuBurger} from "react-icons/ci";
import FeaturedProd from "./featuredProd";

 function Home() {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  // const [mdMenuOpen, setmdMenuOpen] = useState(false)

  function toggleMenu(){
    setisMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="">
        <div className="static h-[700px] bg-[#FBEBB5] md:h-[1000px]">
          <nav className="container flex h-[100px] w-auto items-center justify-around">
              <div className="" >
              <CiMenuBurger onClick={toggleMenu} className={`${
                isMenuOpen ? "translate-x-0 transition-all":"translate-x-full transition-all"
              } `}/>
              </div>
            <div className=" hidden md:flex list-none gap-3 ">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </div>

            <div className="flex h-[28px] items-center gap-5">
              <VscAccount className="hidden md:flex" />
              <CiSearch className="" />
              <CiHeart className="hidden md:flex" />
              <CiShoppingCart className="hidden md:flex" />
            </div>
          </nav>
          <div className="container mx-auto">
            <section className="px-4 md:flex md:items-center md:justify-between">
              <div className="mb-5 md:mb-0 md:w-1/2">
                <h1 className="mb-4 text-3xl font-bold">
                  Rocket single seater{" "}
                </h1>
                <a
                  href="#"
                  className="inline-block border-b-2 border-black text-sm font-semibold hover:text-red-700"
                >
                  shop now
                </a>
              </div>
              <div className="flex justify-center md:w-1/2">
                <img src="../chai.png" className="h-[400px] md:h-[700px]" />
              </div>
            </section>
          </div>
        </div>
      </header>

      <FeaturedProd />
    </>
  );
}

export default Home