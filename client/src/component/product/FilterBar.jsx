import React, { useContext, useState } from "react";
import { FaFilter, FaChevronDown } from "react-icons/fa";
import AppContext from "../../context/AppContext";

function FilterBar() {
  const { setFilteredData, products, filteredData } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Default");
  const [activeCategory, setActiveCategory] = useState("all");

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredData(products);
    } else {
      setFilteredData(
        products.filter(
          (data) => data.category.toLowerCase() === category.toLowerCase()
        )
      );
    }
  };

  const filterByPriceAscending = () => {
    setFilteredData([...filteredData].sort((a, b) => a.price - b.price));
  };

  const filterByPriceDescending = () => {
    setFilteredData([...filteredData].sort((a, b) => b.price - a.price));
  };

  const handleSortOption = (option) => {
    if (option === "priceAsc") {
      filterByPriceAscending();
      setSelectedOption("Price: Low to High");
    }
    if (option === "priceDesc") {
      filterByPriceDescending();
      setSelectedOption("Price: High to Low");
    }
    if (option === "default") {
      setFilteredData(products);
      setSelectedOption("Default");
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-[#FAF4F4] py-6 px-4 md:px-8 border-b border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-0">
          <button
            onClick={() => filterByCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-amber-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => filterByCategory("table")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "table"
                ? "bg-amber-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Tables
          </button>
          <button
            onClick={() => filterByCategory("chair")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "chair"
                ? "bg-amber-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Chairs
          </button>
          {/* Add more categories as needed */}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-2 w-48 hover:border-gray-400 transition-colors"
          >
            <span className="text-gray-700">{selectedOption}</span>
            <FaChevronDown className={`text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 z-10 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
              <button
                onClick={() => handleSortOption("default")}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Default
              </button>
              <button
                onClick={() => handleSortOption("priceAsc")}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Price: Low to High
              </button>
              <button
                onClick={() => handleSortOption("priceDesc")}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Price: High to Low
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterBar;