import React from "react";
import { useLocation } from "react-router-dom";

const PageHeader = () => {
  const location = useLocation();

  const getPageName = () => {
    if (location.pathname === "/") return "My Account";
    return location.pathname
      .slice(1)
      .split(/[-/]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const pageName = getPageName();

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-20 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-sans">
            {pageName}
          </h1>
          <nav className="text-gray-600">
            <ol className="flex justify-center items-center space-x-2 text-sm md:text-base">
              <li className="hover:text-indigo-600 transition-colors">
                <a href="/">Home</a>
              </li>
              <li className="text-gray-400">&gt;</li>
              <li className="text-indigo-600 font-medium">
                {pageName}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;