import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AppContext from "../../context/AppContext";
import Navbar from "../../pages/Navbar";
import RelatedProducts from "./RelatedProducts";
import Footer from "../../pages/Footer";
import { FiShoppingCart, FiStar, FiChevronLeft } from "react-icons/fi";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function ProductDetail() {
  const { addToCart } = useContext(AppContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const url = "https://mern-ecommerce-binod.onrender.com/api";
  const role = JSON.parse(localStorage.getItem("role"))

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const api = await axios.get(`${url}/product/${id}`, {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        });
        setProduct(api.data.product);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF4F4]">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <div className="inline-block h-12 w-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-600">Loading product details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FAF4F4]">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-gray-800">Oops! Something went wrong</h3>
          <p className="mt-2 text-gray-600 max-w-md mx-auto">{error}</p>
          <Link 
            to="/products"
            className="mt-6 inline-block px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Back to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF4F4]">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Product Not Found</h3>
          <p className="mt-2 text-gray-600 max-w-md mx-auto">The product you're looking for doesn't exist.</p>
          <Link 
            to="/products"
            className="mt-6 inline-block px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Render star ratings (example with 4.5 stars)
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-amber-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-amber-400" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4F4]">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Back button */}
          <Link 
            to="/products" 
            className="flex items-center text-amber-600 hover:text-amber-700 mb-6 transition-colors"
          >
            <FiChevronLeft className="mr-2" />
            Back to Shop
          </Link>

          {/* Main Product Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Images */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex h-96 items-center justify-center p-8 bg-[#FFF9E5]">
                  <img 
                    src={product.imgSrc} 
                    alt={product.title} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {/* Thumbnail gallery would go here */}
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h1>
                
                {/* Price */}
                <div className="text-2xl font-bold text-amber-600 mb-4">
                  Rs. {product.price}
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(4.5)}
                  </div>
                  <span className="text-gray-600 text-sm">(5 customer reviews)</span>
                </div>
                
                {/* Description */}
                <div className="prose text-gray-700 mb-6">
                  {product.description}
                </div>
                
                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 border border-gray-300 rounded-l-lg flex items-center justify-center"
                    >
                      -
                    </button>
                    <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                      {quantity}
                    </div>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 border border-gray-300 rounded-r-lg flex items-center justify-center"
                    >
                      +
                    </button>
                    <div className="ml-4 text-sm text-gray-500">
                      {product.quantity} available
                    </div>
                  </div>
                </div>
                
                {/* Add to Cart */}
                {role !== "admin" && (
                                  <button
                  onClick={() =>
                    addToCart(
                      product._id,
                      product.title,
                      product.price,
                      quantity,
                      product.imgSrc,
                    )
                  }
                  className="w-full bg-gray-800 hover:bg-black text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>

                ) }

              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button className="px-6 py-4 font-medium text-gray-900 border-b-2 border-amber-600">
                  Description
                </button>
                <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">
                  Additional Information
                </button>
                <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">
                  Reviews (5)
                </button>
              </nav>
            </div>
            <div className="p-6 md:p-8">
              <div className="prose max-w-none">
                {product.fullDescription || product.description}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts category={product.category} />
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetail;