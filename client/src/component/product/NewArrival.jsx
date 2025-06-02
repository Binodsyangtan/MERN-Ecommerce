import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <section className="relative">
      {/* Full-width background */}
      <div className="absolute inset-0 bg-[#FBEBB5] -z-10 w-screen left-1/2 -translate-x-1/2"></div>
      
      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Product Image */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative h-80 md:h-[500px] w-full flex items-center justify-center">
              <img
                src="/arrival.png"
                alt="Asgaard sofa"
                className="object-contain w-full h-full max-w-md animate-float"
              />
              {/* Decorative badge */}
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-amber-600 font-bold">NEW</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 lg:pl-16 text-center lg:text-left">
            <p className="text-gray-600 font-medium mb-2 tracking-wider">NEW ARRIVAL</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Asgaard Sofa Collection
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience unparalleled comfort with our premium sofa collection.
            </p>
            <Link 
              to="/products"
              className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Shop Now
            </Link>

            {/* Additional info */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Premium Materials</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">5-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;