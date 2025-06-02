import React, { useContext } from "react";
import Navbar from "../../pages/Navbar";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import Footer from "../../pages/Footer";

const Cart = () => {
  const { cart, decreaseQuantity, addToCart, removeFromCart, price } =
    useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      {/* <header className="bg-[#FBEBB5]">
        <div className="container mx-auto px-4 py-11 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-float">Your Shopping Cart</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Great picks! Secure them now before someone else does.
          </p>
        </div>
        <div className="h-16 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </header> */}
            <header className="bg-[#FBEBB5]">
        <div className="container mx-auto px-4 py-10 md:py-12 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl animate-float">
            Your Shopping Cart
          </h1>
          <p className="mx-auto max-w-lg text-gray-600">
            Great picks! Secure them now before someone else does.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {cart?.items?.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              {/* Desktop Table Headers */}
              <div className="hidden md:grid grid-cols-6 gap-4 border-b pb-4 font-medium text-gray-700">
                <div>Product</div>
                <div>Title</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
                <div></div>
              </div>
              
              {/* Cart Items List */}
              <div className="divide-y">
                {cart.items.map((product) => (
                  <div key={product._id} className="py-4 grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                    {/* Product Image */}
                    <div className="flex justify-center">
                      <img
                        src={product.imgSrc}
                        alt={product.title}
                        className="h-24 w-24 object-contain"
                      />
                    </div>
                    
                    {/* Product Title */}
                    <div className="text-sm font-medium text-gray-800 md:text-base">
                      {product.title}
                    </div>
                    
                    {/* Price */}
                    <div className="text-gray-600">Rs. {product.price}</div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(product.productId, 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="w-8 text-center">{product.quantity}</span>
                      <button
                        onClick={() => addToCart(
                          product.productId,
                          product.title,
                          product.price,
                          1,
                          product.imgSrc
                        )}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                    
                    {/* Subtotal */}
                    <div className="font-medium">
                      Rs. {(product.price * product.quantity).toFixed(2)}
                    </div>
                    
                    {/* Remove Button */}
                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          if (window.confirm("Are you sure you want to remove this item from your cart?")) {
                            removeFromCart(product.productId);
                          }
                        }}
                        className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                        title="Remove item"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="flex flex-col bg-[#FFF9E5] rounded-lg shadow-sm p-6 h-fit sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rs. {price}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between pt-2 text-lg font-bold">
                  <span>Total</span>
                  <span>Rs. {price}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Link 
                  to="/cart/Checkout" 
                  className="block w-full rounded-lg bg-orange-500 py-3 text-center font-medium text-white hover:bg-orange-600 transition-colors"
                >
                  Proceed to Checkout
                </Link>
                <Link 
                  to="/products" 
                  className="block w-full rounded-lg border border-gray-300 py-2 text-center font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart State */
          <div className="bg-white rounded-lg shadow-sm py-16 flex flex-col items-center justify-center">
            <div className="text-5xl text-gray-300 mb-6">🛒</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6 max-w-md text-center">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/"
              className="rounded-lg bg-orange-500 px-6 py-2 font-medium text-white hover:bg-orange-600 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;