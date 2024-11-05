import React from "react";

const ProductPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-white py-4 shadow">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="space-x-4 flex items-center">
            <a href="#" className="text-sm">Home</a>
            <a href="#" className="text-sm">Shop</a>
            <a href="#" className="text-sm">About</a>
            <a href="#" className="text-sm">Contact</a>
            <div className="space-x-2">
              <i className="fa fa-user"></i>
              <i className="fa fa-heart"></i>
              <i className="fa fa-shopping-cart"></i>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="bg-yellow-100 py-10 px-4 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Rocket single seater</h2>
            <a
              href="#"
              className="inline-block text-sm font-semibold border-b-2 border-black"
            >
              Shop Now
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="path-to-chair-image"
              alt="Rocket single seater"
              className="mx-auto md:max-w-md"
            />
          </div>
        </section>

        {/* Product Section */}
        <section className="flex flex-wrap gap-4 justify-center mt-10">
          <div className="bg-white p-4 rounded-lg shadow w-72 text-center">
            <img src="path-to-side-table-image" alt="Side table" className="mx-auto mb-4" />
            <h3 className="text-lg font-medium">Side table</h3>
            <a href="#" className="text-sm font-semibold border-b-2 border-black">
              View More
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow w-72 text-center">
            <img src="path-to-sofa-image" alt="Side table" className="mx-auto mb-4" />
            <h3 className="text-lg font-medium">Side table</h3>
            <a href="#" className="text-sm font-semibold border-b-2 border-black">
              View More
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
