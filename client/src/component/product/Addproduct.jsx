import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast, Bounce } from "react-toastify";

function Addproduct() {
  const url = "http://localhost:8000/api";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price || !category || !quantity || !imgSrc) {
      alert("Please fill in all required fields.");
      return;
    }

    const productData = {
      title,
      description,
      price,
      quantity,
      category,
      imgSrc,
    };

    try {
      const response = await axios.post(`${url}/product/add`, productData);
      // console.log("addproduct",response);
      if (response.status === 200) {
        setTitle(""),
          setImgSrc(""),
          setCategory(""),
          setDescription(""),
          setQuantity("");
        setPrice("");
        toast.success(
          response.data.message || "product updated successfully!",
          {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          },
        );
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog. Please try again.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">Add Product</h1>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter product title"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter product description"
              rows="5"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter product price"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter product category"
              required
            />
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter product quantity"
              required
            />
          </div>

          {/* Image Source */}
          <div className="mb-4">
            <label
              htmlFor="imgSrc"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imgSrc"
              name="imgSrc"
              onChange={(e) => setImgSrc(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter product image URL"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default Addproduct;
