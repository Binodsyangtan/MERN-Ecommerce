import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function FeaturedProd() {
  const products = [
    {
      id: 1,
      name: "Modern Side Table",
      image: "../slide1.png",
      price: "Rs 20000",
      category: "Living Room"
    },
    {
      id: 2,
      name: "Luxury Sofa",
      image: "../slide3.png",
      price: "Rs 15000",
      category: "Living Room"
    },
    {
      id: 3,
      name: "Coffee Table",
      image: "../slide2.png",
      price: "Rs 12000",
      category: "Living Room"
    },
    {
      id: 4,
      name: "Accent Chair",
      image: "../chai.png",
      price: "Rs 1300",
      category: "Living Room"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = (index) => ({
    hidden: { 
      opacity: 0, 
      y: 40,
      x: index % 2 === 0 ? -100 : 100
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10
      },
      exit: {
        opacity: 0,
        y: 20,
        transition: {duration: 0.3}
      }
    }
  });

  return (
    <section className="py-16 bg-[#FAF4F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium furniture pieces
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={item(index)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-amber-600 font-medium">{product.category}</span>
                <h3 className="text-xl font-semibold text-gray-800 mt-1 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 hover:scale-105 transform"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProd;