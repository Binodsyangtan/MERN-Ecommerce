import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Added for navigation

function Addproduct() {
  const navigate = useNavigate(); // Initialize navigate function
  const url = "https://mern-ecommerce-binod.onrender.com/api";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Added for loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set loading state

    if (!title || !description || !price || !category || !quantity || !imgSrc) {
      toast.error("Please fill in all required fields.", {
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
      setIsSubmitting(false);
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
      
      if (response.status === 200) {
        toast.success(
          response.data.message || "Product added successfully!",
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
          }
        );
        
        // Reset form
        setTitle("");
        setImgSrc("");
        setCategory("");
        setDescription("");
        setQuantity("");
        setPrice("");
        
        // Navigate to admin products section after toast completes
        setTimeout(() => {
          navigate("/admin"); // Adjust this path to your admin products route
        }, 1500);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error(error.response?.data?.message || "Failed to add product. Please try again.", {
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
    } finally {
      setIsSubmitting(false); // Reset loading state
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
              value={title}
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
              value={description}
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
              value={price}
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
              value={category}
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
              value={quantity}
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
              value={imgSrc}
              onChange={(e) => setImgSrc(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter product image URL ( for now i am using imgUrl , i will upadate to upload file later , also add multer to handle file coz nodejs le hanlde garna sakaina file  "
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-md px-4 py-2 font-bold text-white transition duration-300 ${
              isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isSubmitting ? 'Adding Product...' : 'Add Product'}
          </button>
        </form>
      </div>
    </>
  );
}

export default Addproduct;