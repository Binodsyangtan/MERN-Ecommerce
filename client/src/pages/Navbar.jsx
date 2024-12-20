import React, { useContext, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { CiHeart, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { logout, isAuthenticated, user, cart } = useContext(AppContext);
  const role = JSON.parse(localStorage.getItem("role"));
  const navigate = useNavigate();
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

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <nav className="container flex h-[100px] w-auto items-center justify-between content-center">
        {/* Hamburger Icon */}
        <div>
          <CiMenuBurger
            onClick={toggleMenu}
            className={`${
              isMenuOpen
                ? "translate-x-0 transition-all"
                : "translate-x-full transition-all"
            } cursor-pointer md:hidden`}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-3 md:flex">
          <Link to="/home" className="rounded hover:bg-red-500">
            Home
          </Link>
          <Link to="/products" className="rounded hover:bg-red-500">
            Shop
          </Link>
          <Link to={"/bloglist"} className="rounded hover:bg-red-500">
            Blog
          </Link>
          {location.pathname === "/Contact" ? (
            <span className="cursor-not-allowed text-gray-500">Contact</span>
          ) : (
            <Link to={"/Contact"} className="rounded hover:bg-red-500">
              Contact
            </Link>
          )}
          {/* <Link to={"/profile"}>Profile</Link> */}
          {/* {role == "admin" &&(
            
            <Link to={'/admin'}>
            <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Admin
            </button>
          </Link>)} */}
        </div>

        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          className="relative mx-4 flex w-full max-w-md items-center"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-half rounded border border-gray-300 p-2 focus:border-red-500 focus:outline-none"
          />
        </form>

        {/* Icon Section */}
        <div className="flex h-[28px] items-center gap-5">
          {!isAuthenticated && (
            <>
              <Link to={"/"}>
                <VscAccount className="hidden md:flex" />
              </Link>
            </>
          )}
          {isAuthenticated && (
            <>
              {/* <CiHeart className="hidden md:flex" /> */}
              {role !== "seller" && (
                <Link to={"/cart"}>
                  <CiShoppingCart className="hidden md:flex" />
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="hidden cursor-pointer rounded-lg p-2 hover:bg-red-500 md:block"
              >
                Logout
              </button>
              {role == "admin" &&(
            
            <Link to={'/admin'}>
            <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
              Admin
            </button>
          </Link>)}
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="menu-overlay"
        onClick={closeMenu}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed left-0 top-0 flex h-screen w-full items-center justify-start bg-gray-800 bg-opacity-70 md:hidden`}
      >
        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen
              ? "translate-x-0 transition-all"
              : "translate-x-full transition-all"
          } flex h-full w-1/2 flex-col items-start bg-[#FBEBB5] p-5 transition-all duration-300 ease-in-out`}
        >
          <div className="mt-5 flex flex-col space-y-4 text-black">
            <Link to="/" onClick={closeMenu} className="p-2 hover:bg-red-500">
              Home
            </Link>
            <Link
              to="/products"
              onClick={closeMenu}
              className="p-2 hover:bg-red-500"
            >
              Shop
            </Link>
            <Link to={"/About"} className="p-2 hover:bg-red-500">
              About
            </Link>
            <Link to={"/Contact"} className="p-2 hover:bg-red-500">
              Contact
            </Link>
            {!isAuthenticated && (
              <Link to={"/Myaccount"} className="p-2 hover:bg-red-500">
                Myaccount
              </Link>
            )}
            {isAuthenticated && (
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="p-2 hover:bg-red-500"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
