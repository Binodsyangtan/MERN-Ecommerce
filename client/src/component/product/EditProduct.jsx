import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();

  const url = "https://mern-ecommerce-binod.onrender.com/api";
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
    imgSrc: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${url}/product/${id}`);
        // console.log("product",res.data.product);
        const fetchedProduct = res.data.product;
        // console.log("fetchedproduct", fetchedProduct);
        setProduct({
          title: fetchedProduct.title,
          description: fetchedProduct.description,
          price: fetchedProduct.price,
          category: fetchedProduct.category,
          quantity: fetchedProduct.quantity,
          imgSrc: fetchedProduct.imgSrc,
        });

        console.log("after fetched", product);
      } catch (error) {
        console.error("Error fetching products details", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${url}/product/${id}`, product);
      // console.log("response", response);

      if (response.status === 200) {
        toast.success(response.data.message || "product updated successfully!",
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
      navigate("/admin")
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
        <h1 className="mb-6 text-center text-2xl font-bold">Edit Product</h1>
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
              value={product.title}
              onChange={handleChange}
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
              name="description"
              value={product.description}
              onChange={handleChange}
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
              value={product.price}
              onChange={handleChange}
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
              value={product.category}
              onChange={handleChange}
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
              value={product.quantity}
              onChange={handleChange}
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
              value={product.imgSrc}
              onChange={handleChange}
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
            update Product
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
