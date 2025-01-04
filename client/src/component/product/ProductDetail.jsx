import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AppContext from "../../context/AppContext";
import Navbar from "../../pages/Navbar";
import RelatedProducts from "./RelatedProducts";
import Footer from "../../pages/Footer";

function ProductDetail() {
  const { addToCart } = useContext(AppContext);
  const { id } = useParams();
  const [product, setProduct] = useState();

  const url = "https://mern-ecommerce-binod.onrender.com/api";

  useEffect(() => {
    const fetchProducts = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      console.log(api.data.product);
      setProduct(api.data.product);
    };

    fetchProducts();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-gray-500">
          <span>Home</span> &gt; <span>Shop</span> &gt;{" "}
          <span className="font-bold text-gray-900">{product?.title}</span>
        </nav>

        {/* Main Content Layout */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex h-96 items-center justify-center rounded-lg bg-[#FFF9E5]">
              <img src={product?.imgSrc} alt="" />
            </div>
            {/* <div className="mt-4 flex gap-4">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-500 text-sm">Image</span>
                </div>
              ))}
          </div> */}
          </div>

          {/* Product Info Section */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg p-6">
              <h1 className="mb-2 h-10 font-bold">{product?.title}</h1>
              <div className="mb-2 h-8">Rs. {product?.price}</div>{" "}
              <div className="mb-3 h-6"> 4star | 5 customer Reviews</div>{" "}
              <div className="mb-2 h-8"> Quantity:{product?.quantity}</div>
              {/* Rating Placeholder */}
              <div className="mb-4 h-24">{product?.description}</div>
              {/* <div className="h-10 bg-gray-300 mb-4"></div> Size Selector */}
              {/* <div className="h-10 bg-gray-300 mb-4"></div> Color Selector */}
              <div className="h-10 rounded-xl border-2">
                {/* kati ota quantity rakhen tesko yeha rakhne */}
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
                  className="w-full rounded-xl py-2 text-black hover:bg-red-500"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <ul className="flex gap-4 border-b text-gray-600">
            <li className="cursor-pointer border-b-2 border-gray-400 pb-2">
              Description
            </li>
            <li className="cursor-pointer">Additional Information</li>
            <li className="cursor-pointer">Reviews</li>
          </ul>
          <div className="mt-4 h-40 rounded-lg bg-transparent">
            {product?.description}
          </div>
        </div>
      </div>

      <RelatedProducts category={product?.category} />
      <Footer />
    </>
  );
}

export default ProductDetail;
