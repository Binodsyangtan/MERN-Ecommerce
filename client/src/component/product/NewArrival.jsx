import { Link } from "react-router-dom";

const NewArrival = () => {
    
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#FBEBB5] p-6 md:p-12">
        {/* Product Image Placeholder */}
        <div className="flex-1">
          <div className="bg-[#FBEBB5] h-[300px] md:h-[400px] w-full overflow-hidden">
            <img
              src="../public/arrival.png"
              alt="Asgaard sofa"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
  
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mt-6 md:mt-0 md:pl-10">
          <p className="text-gray-600 text-lg">New Arrivals</p>
          <h1 className="text-3xl md:text-5xl font-bold my-3">Asgaard sofa</h1>
          <Link to={'/products'}>
          <button className="mt-6 px-6 py-3 border border-gray-800 text-gray-800 hover:bg-[#f3c328] hover:text-white transition-all duration-200">
            Order Now
          </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default NewArrival;
  