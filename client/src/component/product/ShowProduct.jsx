import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Navbar from "../../pages/Navbar";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";

function ShowProduct() {
  const { products,filteredData,addToCart } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <FilterBar/>
      <div className="container mx-auto p-4">
        {/* Product grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredData?.map((product) => (
            <div
              key={product._id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:bg-[#FBEBB5]"
            >
              {/* div mai click garda singleprodcut ma laijanxa  */}
              <Link to={"SingleProduct"}>
                <div className="flex h-40 items-center justify-center">
                  {/* Product image */}
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="max-h-full"
                  />
                </div>
                {/* Product title */}
                <h2 className="mb-2 mt-4 text-center text-lg font-medium">
                  {product.title}
                </h2>
                {/* Product price */}
                <p className="mb-4 text-center text-gray-700">
                  Rs. {product.price}
                </p>
                {/* Button */}
              </Link>
              <button
                onClick={() =>
                  addToCart(
                    product._id,
                    product.title,
                    product.price,
                    1,
                    product.imgSrc,
                  )
                }
                className="w-full rounded bg-red-500 py-2 text-white hover:bg-red-600"
              >
                add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowProduct;
