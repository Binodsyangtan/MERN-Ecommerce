import React from "react";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function TopPicks() {
    const {products} = useContext(AppContext)
  return (
    <div className="container p-11">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Top Picks For You</h2>
        <p className="text-gray-500">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products?.slice(0, 4).map((product) => (
          <div key={product.id} className="text-center">
            {/* Product Image */}
            <div className="h-40 bg-white mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={product.imgSrc || "https://via.placeholder.com/150"}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Product Details */}
            <h3 className="text-lg font-medium">{product.title}</h3>
            <p className="text-gray-600 mt-1 font-semibold">Rs. {product.price}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <Link to={'/products'}>
        <button className="text-black border-b-2 border-gray-800 hover:border-gray-400 transition duration-300">
          View More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TopPicks;
