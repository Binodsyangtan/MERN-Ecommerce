import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { CiSearch, CiHeart, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const location = useLocation();

  // Toggle the menu visibility
  function toggleMenu() {
    setisMenuOpen(!isMenuOpen);
  }

  // Close the menu if clicked outside the menu or on the overlay
  function closeMenu(e) {
    if (e.target.id === "menu-overlay") {
      setisMenuOpen(false);
    }
  }

  return (
    <>
      <nav className="container flex h-[100px] w-auto items-center justify-between">
        {/* Hamburger Icon */}
        <div>
          <CiMenuBurger
            onClick={toggleMenu}
            className={`${
              isMenuOpen ? "translate-x-0 transition-all" : "translate-x-full transition-all"
            } md:hidden cursor-pointer`}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex  gap-3">
          <Link to="/" className="hover:bg-red-500 rounded">Home</Link>
          <Link to="/products" className="hover:bg-red-500 rounded">Shop</Link>
          <Link to={"/About"} className="hover:bg-red-500 rounded">About</Link>
          {location.pathname === "/Contact" ? (
             <span className="text-gray-500 cursor-not-allowed">Contact</span>
          ):
          <Link to={"Contact"} className="hover:bg-red-500 rounded">Contact</Link>
          }
        </div>

        {/* Icon Section */}
        <div className="flex h-[28px] items-center gap-5">
          <Link to={"/Myaccount"}>
          <VscAccount className="hidden md:flex " />
          </Link>
          <CiSearch className="" />
          <CiHeart className="hidden md:flex" />
          <CiShoppingCart className="hidden md:flex" />
        </div>
      </nav>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      <div
        id="menu-overlay"
        onClick={closeMenu}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-70 flex justify-start items-center`}
      >
        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0 transition-all" : "translate-x-full transition-all"
          } w-1/2 h-full bg-[#FBEBB5] flex flex-col items-start p-5 transition-all ease-in-out duration-300`}
        >
          <div className="text-black flex flex-col space-y-4 mt-5">
            {location.pathname === "/" ? (
              <span className="text-gray-500 cursor-not-allowed">Home</span>
            ) : (
              <Link to="/" onClick={closeMenu} className="hover:bg-red-500 p-2">Home</Link>
            )}

            {location.pathname === "/products" ? (
              <span className="text-gray-500 cursor-not-allowed">Shop</span>
            ) : (
              <Link to="/products" onClick={closeMenu} className="hover:bg-red-500 p-2">Shop</Link>
            )}

            <Link to={'/About'} className="hover:bg-red-500 p-2 cursor-pointer">About</Link>
            <Link to={"/Contact"} className="hover:bg-red-500 p-2 cursor-pointer">Contact</Link>
            <Link to={"/Myaccount"} className="hover:bg-red-500 p-2 cursor-pointer">Myaccount</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
