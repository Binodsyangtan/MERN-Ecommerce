import React from "react";
import { Link } from "react-router-dom";
import FeaturedProd from "./featuredProd";
import Navbar from "./Navbar";
import TopPicks from "../component/product/TopPicks";
import NewArrival from "../component/product/NewArrival";
import Footer from "./Footer";

function Home() {
  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
          <Navbar />
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 h-screen max-h-[900px]">
          
          <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
            <section className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight object-contain animate-float">
                  Premium Single Seater <span className="text-amber-600">Rocket</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                  Experience unmatched comfort and style with our award-winning design
                </p>
                <Link 
                  to="/products"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg object-contain animate-float"
                >
                  Shop Now
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="../chai.png" 
                  alt="Rocket Single Seater" 
                  className="h-auto max-h-[500px] md:max-h-[700px] object-contain animate-float"
                />
              </div>
            </section>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* Featured Products */}
      <section className="py-16 bg-[#FAF4F4]">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Products</h2> */}
          <FeaturedProd />
        </div>
      </section>

      {/* Top Picks */}
      <section className="py-16 bg-[#FAF4F4]">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Top Picks</h2> */}
          <TopPicks />
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">New Arrivals</h2>
          <NewArrival />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust our premium furniture
          </p>
          <Link 
            to="/products"
            className="inline-block bg-white text-amber-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            Browse Collection
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
