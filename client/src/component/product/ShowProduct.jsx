import React, { useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../../context/AppContext";
import Navbar from "../../pages/Navbar";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import Footer from "../../pages/Footer";

function ShowProduct() {
  const { filteredData, addToCart, loading, error } = useContext(AppContext);
  const permissions = JSON.parse(localStorage.getItem("permissions"));
  const role = JSON.parse(localStorage.getItem("role"));

  // Slower animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased stagger time
        delayChildren: 0.4,   // Added initial delay
        ease: "easeInOut"
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,      // Slower duration
        ease: [0.16, 0.77, 0.47, 0.97] // Smooth easing curve
      } 
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#FAF4F4]">
      <Navbar />
      <div className="container mx-auto px-4 py-32 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="inline-block h-12 w-12 border-4 border-amber-500 border-t-transparent rounded-full"
        />
        <p className="mt-4 text-lg text-gray-600">Loading products...</p>
      </div>
      <Footer />
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-[#FAF4F4]">
      <Navbar />
      <div className="container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full"
        >
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl font-medium text-gray-800"
        >
          Something went wrong
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.reload()}
          className="mt-6 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
          Try Again
        </motion.button>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4F4]">
      <Navbar />
      
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#FBEBB5]"
      >
        <div className="container mx-auto px-4 py-10 text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-gray-800 mb-2 animate-float"
          >
            Our Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 max-w-md mx-auto"
          >
            Discover handcrafted pieces that blend elegance with functionality
          </motion.p>
        </div>
      </motion.header>

      <FilterBar />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {filteredData?.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredData.map((product) => (
              <motion.div
                key={product._id}
                variants={item}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Link to={`/products/${product._id}`} className="block">
                  <div className="relative h-60 overflow-hidden">
                    <motion.img
                      src={product.imgSrc}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.5 }
                      }}
                    />
                  </div>
                  
                  <div className="p-4">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-xs text-amber-600 uppercase tracking-wide"
                    >
                      {product.category}
                    </motion.span>
                    <h2 className="text-lg font-semibold text-gray-800 mt-1 mb-2">{product.title}</h2>
                    <p className="text-amber-600 font-medium">Rs. {product.price}</p>
                  </div>
                </Link>

                <div className="px-4 pb-4">
                  {role !== "admin" && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => addToCart(product._id, product.title, product.price, 1, product.imgSrc)}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      Add to Cart
                    </motion.button>
                  )}
                  
                  {permissions?.includes("edit-product") && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Link
                        to={`/edit-product/${product._id}`}
                        className="block mt-2 w-full border border-gray-200 hover:border-gray-300 text-gray-700 py-2 rounded-md transition-colors text-center text-sm"
                      >
                        Edit Product
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16 bg-white rounded-lg shadow-sm"
          >
            <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-800">No products found</h3>
            <p className="mt-1 text-gray-600 text-sm">Try adjusting your filters</p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default ShowProduct;