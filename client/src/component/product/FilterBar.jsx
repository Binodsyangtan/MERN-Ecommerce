import React, { useContext, useState } from "react";
import { FaFilter, FaThLarge, FaBars, FaChevronDown } from "react-icons/fa";
import AppContext from "../../context/AppContext";

function FilterBar() {
  const { setFilteredData, products, filteredData } = useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Default");

  const filterByCategory = (category) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() === category.toLowerCase(),
      ),
    );
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
      setFilteredData(products); //reset garxa original data or prodcuts ma
      setSelectedOption("Default");
    }
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="bg-[#FAF4F4] container flex items-center justify-between p-4">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => filterByCategory("table")}
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
        >
          <FaFilter />
          <span className="hidden md:inline">Filter</span>
        </button>

        <button className="text-gray-700 hover:text-gray-900">
          <FaThLarge />
        </button>
        <button className="text-gray-700 hover:text-gray-900">
          <FaBars />
        </button>

        <span className="hidden text-gray-500 md:inline">
          Showing 1–16 of 32 results
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        <span className="hidden md:inline">Show</span>
        <input
          type="number"
          min="1"
          max="32"
          defaultValue="16"
          className="hidden w-12 rounded border border-gray-300 p-1 text-center focus:border-gray-500 focus:outline-none md:block"
        />

        <span className="hidden md:inline">Sort by</span>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-1 rounded border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
          >
            <span>{selectedOption}</span>{" "}
            {/* dynamic banako default lai
             */}
            <FaChevronDown />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 z-10 mt-2 w-40 rounded border border-gray-300 bg-white shadow-lg">
              <button
                onClick={() => handleSortOption("default")}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                Default
              </button>
              <button
                onClick={() => handleSortOption("priceAsc")}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                Price: Low to High
              </button>
              <button
                onClick={() => handleSortOption("priceDesc")}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
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
