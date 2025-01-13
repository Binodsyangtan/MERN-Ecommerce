import React, { useState, useEffect, useContext } from "react";
import { FaHome, FaUser, FaBox } from "react-icons/fa";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Admin() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [view, setView] = useState("dashboard");
  const { products, blogs, setBlogs, setProducts } = useContext(AppContext);
  const url = "https://mern-ecommerce-binod.onrender.com/api";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const api = await axios.get(`${url}/user/all`, {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        });
        setUsers(api.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    if (view === "users") {
      fetchUsers();
    }
  }, [view]);

  const deleteUser = async (userId) => {
    try {
      const api = await axios.delete(`${url}/user/delete/${userId}`);
      alert("User deleted successfully");
      setUsers(users.filter((user) => user._id !== userId)); // Remove the user from state
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  const promoteUser = async (userId) => {
    try {
      const role = "admin";
      const response = await axios.put(
        `${url}/role/promote/${userId}`,
        { role },
        {
          headers: {
            "Content-Type": "Application/json",
          },
        },
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: [role] } : user,
        ),
      );
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      console.log("Error promoting user:", error);
      toast.error("Error promoting user", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const demoteUser = async (userId) => {
    try {
      const role = "user";
      const response = await axios.put(
        `${url}/role/promote/${userId}`,
        { role },
        {
          headers: {
            "Content-Type": "Application/json",
          },
        },
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: [role] } : user,
        ),
      );
      toast.success("User demoted successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      console.log("Error demoting user:", error);
      toast.error("Error demoting user", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const api = await axios.delete(`${url}/product/${productId}`);
      alert("are you sure you want to delelte this product");
      setProducts(products.filter((product) => product._id !== productId)); // Remove the product from state
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  const deleteBlog = async (blogId) => {
    try {
      const api = await axios.delete(`${url}/blog/delete/${blogId}`);
      console.log(api);
      
   
      
      // alert("are you sure you want to delete this blog");
      setBlogs(blogs.filter((blog) => blog._id !== blogId)); //remvove blog form state
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar (fixed on the left) */}
        <div className="w-50 fixed bottom-0 left-0 top-0 bg-[#FBEBB5] p-4 text-black">
          <div className="mb-6 text-lg font-bold">Admin Panel</div>
          <nav>
            <Link to={"/home"}>
              <button className="mb-4 block rounded bg-green-500 px-8 py-2 text-left hover:bg-green-700">
                {" "}
                HOME
              </button>
            </Link>

            <button
              onClick={() => setView("dashboard")}
              className="mb-4 block w-full rounded px-4 py-2 text-left hover:bg-gray-700 hover:text-white"
            >
              <FaHome className="mr-2 inline" /> Dashboard
            </button>
            <button
              onClick={() => setView("users")}
              className="mb-4 block w-full rounded px-4 py-2 text-left hover:bg-gray-700 hover:text-white"
            >
              <FaUser className="mr-2 inline" /> Users
            </button>
            <button
              onClick={() => setView("products")}
              className="mb-4 block w-full rounded px-4 py-2 text-left hover:bg-gray-700 hover:text-white"
            >
              <FaBox className="mr-2 inline" /> Products
            </button>
            <button
              onClick={() => setView("blogs")}
              className="mb-4 block w-full rounded px-4 py-2 text-left hover:bg-gray-700 hover:text-white"
            >
              <FaBox className="mr-2 inline" /> blogs
            </button>
          </nav>
        </div>

        <div className="ml-56 flex-1 overflow-y-auto p-6">
          {/* Dashboard View */}
          {view === "dashboard" && (
            <h1 className="text-2xl font-semibold text-gray-800">
              Welcome to the Admin Dashboard
            </h1>
          )}

          {/* Users View */}
          {view === "users" && (
            <>
              <h1 className="mb-4 text-xl font-semibold text-gray-800">
                Users Management
              </h1>
              <div className="space-y-4">
                {users.map((user) => (
                  <div
                    key={user._id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-md"
                  >
                    <div>
                      <div className="text-lg font-medium">{user.name}</div>
                      <p className="text-sm text-gray-500">{user.email}</p>
                      <p className="text-sm text-black">{user.role}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="rounded-md bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-700"
                      >
                        Delete
                      </button>
                      {user.role !== "admin" && (
                        <button
                          onClick={() => promoteUser(user._id)}
                          className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
                        >
                          Promote
                        </button>
                      )}
                      {user.role !== "user" && (
                        <button
                          onClick={() => demoteUser(user._id)}
                          className="rounded-md bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-700"
                        >
                          Demote
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Products View */}
          {view === "products" && (
            <>
              <div className="flex justify-between">
                <h1 className="mb-4 text-2xl font-semibold text-gray-800">
                  Products List
                </h1>
                <Link to={"/admin/addproduct"}>
                  <button className="rounded bg-green-500 p-2">
                    Add product
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-md"
                  >
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      className="h-40 w-full object-cover"
                    />
                    <h3 className="mt-2 text-lg font-semibold">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-gray-500">{product.description}</p>
                    <p className="mt-2 text-lg font-semibold">
                      Rs. {product.price}
                    </p>
                    <Link to={`/edit-product/${product._id}`}>
                      <button className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                        Edit Product
                      </button>
                    </Link>

                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="mt-4 w-full rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700"
                    >
                      delete Product
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {view === "blogs" && (
            <>
              <h1 className="mb-4 text-2xl font-semibold text-gray-800">
                Blog list
              </h1>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="rounded-lg border p-4 shadow transition duration-300 hover:shadow-md"
                  >
                    <div>
                      <img
                        src={blog.imgSrc || "https://via.placeholder.com/300"}
                        alt={blog.title}
                        className="mb-4 h-48 w-full rounded-t-lg object-cover"
                      />
                      <h2 className="mb-2 text-lg font-bold">{blog.title}</h2>
                      <p className="mb-4 text-sm text-gray-600">
                        <span className="font-semibold">Author:</span>{" "}
                        {blog.author || "Anonymous"}
                      </p>
                      <p className="mb-4 text-gray-700">
                        {blog.content.slice(0, 100)}...
                      </p>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Category:</span>{" "}
                        {blog.category}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold">Tags:</span>{" "}
                        {blog.tags.join(", ") || "N/A"}
                      </p>
                      <Link to={`/edit-blog/${blog._id}`}>
                        <button className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                          Edit Blog
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteBlog(blog._id)}
                        className="mt-4 w-full rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-700"
                      >
                        delete Blog
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Admin;
