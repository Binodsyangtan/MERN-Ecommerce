import React, { useContext, useState, useEffect, useRef } from "react";
import { VscAccount } from "react-icons/vsc";
import { CiHeart, CiShoppingCart, CiMenuBurger, CiSearch } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearchTerm, setMobileSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { logout, isAuthenticated, user, cart } = useContext(AppContext);
  const role = JSON.parse(localStorage.getItem("role"));
  const navigate = useNavigate();
  const location = useLocation();
  const profileRef = useRef(null);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleMobileSearch = (e) => {
    e.preventDefault();
    if (mobileSearchTerm.trim()) {
      navigate(`/products/search/${mobileSearchTerm}`);
      setMobileSearchTerm("");
      setIsMenuOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/account");
    setIsProfileOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Sofa Haven Logo" 
                className="h-28 w-auto transition-all duration-300 hover:scale-105 md:h-32"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'text-red-500 font-medium' : 'text-gray-700 hover:text-red-500'}`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`nav-link ${location.pathname === '/products' ? 'text-red-500 font-medium' : 'text-gray-700 hover:text-red-500'}`}
              >
                Shop
              </Link>
              <Link 
                to="/Contact" 
                className={`nav-link ${location.pathname === '/Contact' ? 'text-red-500 font-medium' : 'text-gray-700 hover:text-red-500'}`}
              >
                Contact
              </Link>
              <Link 
                to="/bloglist" 
                className={`nav-link ${location.pathname === '/bloglist' ? 'text-red-500 font-medium' : 'text-gray-700 hover:text-red-500'}`}
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <form 
              onSubmit={handleSearch}
              className="relative hidden md:block"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
              >
                <CiSearch size={20} />
              </button>
            </form>

            {/* Mobile Search Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-red-500"
              onClick={() => setIsMenuOpen(true)}
            >
              <CiSearch size={24} />
            </button>

            {/* Account and Cart */}
            <div className="flex items-center space-x-6">
              {!isAuthenticated ? (
                <Link to="/account" className="text-gray-700 hover:text-red-500">
                  <VscAccount size={24} />
                </Link>
              ) : (
                <>
                  {role !== "admin" && (
                    <Link to="/cart" className="relative text-gray-700 hover:text-red-500">
                      <CiShoppingCart size={24} />
                      {cart?.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {cart.length}
                        </span>
                      )}
                    </Link>
                  )}
                  <div className="hidden md:block relative" ref={profileRef}>
                    <button 
                      className="flex items-center space-x-2 text-gray-700 hover:text-red-500"
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                      <VscAccount size={24} />
                      <span className="text-sm">{user?.name || 'Account'}</span>
                    </button>
                    {isProfileOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        <Link
                          to="/account"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          My Account
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                  {role === "admin" && (
                    <Link to="/admin">
                      <button className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                        Admin Panel
                      </button>
                    </Link>
                  )}
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-red-500 ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <CiMenuBurger size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b">
            <Link to="/" className="flex items-center">
              <img 
                src="../logo.png" 
                alt="Sofa Haven Logo" 
                className="h-20 w-auto" 
              />
            </Link>
          </div>
          
          {/* Mobile Search Bar */}
          <form onSubmit={handleMobileSearch} className="p-4 border-b">
            <div className="relative">
              <input
                type="text"
                value={mobileSearchTerm}
                onChange={(e) => setMobileSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500"
              >
                <CiSearch size={20} />
              </button>
            </div>
          </form>

          <nav className="p-4">
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className={`block py-2 px-3 rounded ${location.pathname === '/' ? 'bg-red-50 text-red-500' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className={`block py-2 px-3 rounded ${location.pathname === '/products' ? 'bg-red-50 text-red-500' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  to="/Contact" 
                  className={`block py-2 px-3 rounded ${location.pathname === '/Contact' ? 'bg-red-50 text-red-500' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/bloglist" 
                  className={`block py-2 px-3 rounded ${location.pathname === '/bloglist' ? 'bg-red-50 text-red-500' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  Blog
                </Link>
              </li>
              {!isAuthenticated && (
                <li>
                  <Link 
                    to="/account" 
                    className="block py-2 px-3 rounded text-gray-700 hover:bg-gray-50"
                  >
                    Login/Register
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <>
                  <li>
                    <Link 
                      to="/account" 
                      className="block py-2 px-3 rounded text-gray-700 hover:bg-gray-50"
                    >
                      My Account
                    </Link>
                  </li>
                  {role === "admin" && (
                    <li>
                      <Link 
                        to="/admin" 
                        className="block py-2 px-3 rounded text-gray-700 hover:bg-gray-50"
                      >
                        Admin Panel
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={() => {
                        logout();
                        navigate("/");
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left py-2 px-3 rounded text-gray-700 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;