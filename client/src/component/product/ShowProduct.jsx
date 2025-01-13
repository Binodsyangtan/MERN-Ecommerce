import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Navbar from "../../pages/Navbar";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import Footer from "../../pages/Footer";
import PageHeader from "../PageHeader";

function ShowProduct() {
  const { products, filteredData, addToCart,loading,error } = useContext(AppContext);
  const permissions = JSON.parse(localStorage.getItem("permissions"));
  const role = JSON.parse(localStorage.getItem("role"));
  // console.log(role);


  if (loading) return <p className="text-center text-gray-500">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  

  return (
    <>
      <Navbar />
      <PageHeader/>
      <FilterBar />
      <div className="container mx-auto p-4">
        {/* Product grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredData?.map((product) => (
            <div
              key={product._id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:bg-[#FBEBB5]"
            >
              {/* div mai click garda singleprodcut ma laijanxa  */}
              <Link to={`/products/${product._id}`}>
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
              <div className="">

                { role !== "seller" &&(
                  
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
                )
              }
                  
                  {permissions && permissions.indexOf("edit-product") !== -1 && (
                    <button className="w-full rounded bg-red-500 py-2 text-white items-center mt-2">
                      edit
                    </button>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ShowProduct;
