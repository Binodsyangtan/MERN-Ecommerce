import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Navbar from "../../pages/Navbar";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import Footer from "../../pages/Footer";
import PageHeader from "../PageHeader";

function ShowProduct() {
  const { filteredData, addToCart, loading, error } = useContext(AppContext);
  const permissions = JSON.parse(localStorage.getItem("permissions"));
  const role = JSON.parse(localStorage.getItem("role"));

  // Loading state
  if (loading) return (
    <div className="min-h-screen bg-[#FAF4F4]">
      <Navbar />
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="inline-block h-12 w-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-600">Loading our finest collection...</p>
      </div>
      <Footer />
    </div>
  );

  // Error state
  if (error) return (
    <div className="min-h-screen bg-[#FAF4F4]">
      <Navbar />
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-gray-800">Oops! Something went wrong</h3>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">Failed to load products</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
          Try Again
        </button>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4F4]">
      <Navbar />
      
      {/* Shop Header */}
      {/* <div className="bg-[#FBEBB5] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 object-contain animate-float">Our Collection</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover handcrafted pieces that blend timeless elegance with modern functionality
          </p>
        </div>
      </div> */}
            <header className="bg-[#FBEBB5]">
        <div className="container mx-auto px-4 py-10 md:py-12 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl animate-float">
            Our Collection
          </h1>
          <p className="mx-auto max-w-lg text-gray-600">
             Discover handcrafted pieces that blend timeless elegance with modern functionality
          </p>
        </div>
      </header>

      <FilterBar />

      {/* Product Grid */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        {filteredData?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {filteredData.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to={`/products/${product._id}`} className="block">
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <span className="text-sm text-amber-600 font-medium">{product.category}</span>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">{product.title}</h2>
                    <p className="text-lg font-semibold text-amber-600 mb-4">Rs. {product.price}</p>
                  </div>
                </Link>

                {/* Action Buttons */}
                <div className="px-6 pb-6">
                  {role !== "admin" && (
                    <button
                      onClick={() => addToCart(product._id, product.title, product.price, 1, product.imgSrc)}
                      className="w-full  bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      Add to Cart
                    </button>
                  )}
                  
                  {permissions?.includes("edit-product") && (
                    <Link
                      to={`/edit-product/${product._id}`}
                      className="block mt-3 w-full border border-gray-300 hover:border-gray-400 text-gray-800 font-medium py-3 rounded-lg transition-colors text-center"
                    >
                      Edit Product
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-4 text-xl font-medium text-gray-800">No products found</h3>
            <p className="mt-2 text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ShowProduct;