import React from "react";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function TopPicks() {
  const { products } = useContext(AppContext);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Top Picks For You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products curated just for you
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.slice(0, 4).map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.imgSrc || "https://via.placeholder.com/400"}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-gray-900">Rs. {product.price}</span>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-amber-600 hover:text-amber-700 font-medium flex items-center"
                  >
                    View
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TopPicks;