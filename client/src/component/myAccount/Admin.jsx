import React, { useState, useEffect, useContext } from "react";
import { FaHome, FaUser, FaBox, FaChartLine, FaBlogger, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";
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
        toast.error("Failed to fetch users", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };

    if (view === "users") {
      fetchUsers();
    }
  }, [view]);

  const deleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const api = await axios.delete(`${url}/user/delete/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log("Error deleting user:", error);
      toast.error("Failed to delete user", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const updateUserRole = async (userId, newRole) => {
    try {
      const response = await axios.put(
        `${url}/user/role/${userId}`,
        { role: newRole },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      
      setUsers(users.map(user => 
        user._id === userId ? { ...user, role: newRole } : user
      ));
      
      toast.success(`User ${newRole === "admin" ? "promoted" : "demoted"} successfully`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error updating user role:", error);
      toast.error(error.response?.data?.message || "Failed to update user role", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const promoteUser = (userId) => updateUserRole(userId, "admin");
  const demoteUser = (userId) => updateUserRole(userId, "user");

  // ... (keep other functions like deleteProduct, deleteBlog)
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
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 fixed bottom-0 left-0 top-0 border-r bg-white p-4 shadow-md">
          <div className="mb-8 flex items-center space-x-2">
            <div className="text-xl font-bold text-indigo-600">Admin Panel</div>
          </div>
          
          <nav className="space-y-2">
            <Link to={"/"} className="block">
              <button className="flex w-full items-center rounded-lg bg-indigo-600 px-4 py-3 text-white transition-colors hover:bg-indigo-700">
                <FaHome className="mr-3" />
                <span>Home</span>
              </button>
            </Link>

            <button
              onClick={() => setView("dashboard")}
              className={`flex w-full items-center rounded-lg px-4 py-3 transition-colors ${view === "dashboard" ? "bg-indigo-100 text-indigo-600" : "hover:bg-gray-100"}`}
            >
              <FaChartLine className="mr-3" />
              <span>Dashboard</span>
            </button>
            
            <button
              onClick={() => setView("users")}
              className={`flex w-full items-center rounded-lg px-4 py-3 transition-colors ${view === "users" ? "bg-indigo-100 text-indigo-600" : "hover:bg-gray-100"}`}
            >
              <FaUser className="mr-3" />
              <span>Users</span>
            </button>
            
            <button
              onClick={() => setView("products")}
              className={`flex w-full items-center rounded-lg px-4 py-3 transition-colors ${view === "products" ? "bg-indigo-100 text-indigo-600" : "hover:bg-gray-100"}`}
            >
              <FaBox className="mr-3" />
              <span>Products</span>
            </button>
            
            <button
              onClick={() => setView("blogs")}
              className={`flex w-full items-center rounded-lg px-4 py-3 transition-colors ${view === "blogs" ? "bg-indigo-100 text-indigo-600" : "hover:bg-gray-100"}`}
            >
              <FaBlogger className="mr-3" />
              <span>Blogs</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-6">
          {/* Dashboard View */}
          {view === "dashboard" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Stats Cards */}
                <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Users</p>
                      <p className="mt-1 text-2xl font-semibold">{users.length}</p>
                    </div>
                    <div className="rounded-full bg-indigo-100 p-3">
                      <FaUser className="text-indigo-600" size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Products</p>
                      <p className="mt-1 text-2xl font-semibold">{products.length}</p>
                    </div>
                    <div className="rounded-full bg-indigo-100 p-3">
                      <FaBox className="text-indigo-600" size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Total Blogs</p>
                      <p className="mt-1 text-2xl font-semibold">{blogs.length}</p>
                    </div>
                    <div className="rounded-full bg-indigo-100 p-3">
                      <FaBlogger className="text-indigo-600" size={20} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setView("users")}
                    className="flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition-colors"
                  >
                    <FaUser className="mr-2" /> Manage Users
                  </button>
                  <button 
                    onClick={() => setView("products")}
                    className="flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition-colors"
                  >
                    <FaBox className="mr-2" /> Manage Products
                  </button>
                  <button 
                    onClick={() => setView("blogs")}
                    className="flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition-colors"
                  >
                    <FaBlogger className="mr-2" /> Manage Blogs
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Users View */}
          {view === "users" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Users Management</h1>
                <div className="text-sm text-gray-500">{users.length} users found</div>
              </div>
              
              <div className="overflow-x-auto rounded-lg border bg-white shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {users.map((user) => (
                      <tr key={user._id} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-indigo-100 flex items-center justify-center">
                              <span className="text-indigo-600 font-medium">
                                {user.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">Joined: {new Date(user.createdAt).toLocaleDateString()}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-gray-500">{user.email}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 ${user.role === "admin" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => deleteUser(user._id)}
                              className="flex items-center rounded-md bg-red-100 px-3 py-1 text-sm text-red-600 hover:bg-red-200 transition-colors"
                              title="Delete User"
                            >
                              <FaTrash className="mr-1" />
                              <span>Delete</span>
                            </button>
                            {user.role !== "admin" ? (
                              <button
                                onClick={() => promoteUser(user._id)}
                                className="flex items-center rounded-md bg-green-100 px-3 py-1 text-sm text-green-600 hover:bg-green-200 transition-colors"
                                title="Promote to Admin"
                              >
                                <FaArrowUp className="mr-1" />
                                <span>Promote</span>
                              </button>
                            ) : (
                              <button
                                onClick={() => demoteUser(user._id)}
                                className="flex items-center rounded-md bg-yellow-100 px-3 py-1 text-sm text-yellow-600 hover:bg-yellow-200 transition-colors"
                                title="Demote to User"
                              >
                                <FaArrowDown className="mr-1" />
                                <span>Demote</span>
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
                    {/* Products View */}
          {view === "products" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Products Management</h1>
                <Link to={"/admin/addproduct"}>
                  <button className="flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                    <span>+ Add Product</span>
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                  <div key={product._id} className="overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg">
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                      <p className="mt-2 text-lg font-bold text-indigo-600">Rs. {product.price}</p>
                      <div className="mt-4 flex space-x-2">
                        <Link to={`/edit-product/${product._id}`} className="flex-1">
                          <button className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            if (window.confirm("Are you sure you want to delete this product?")) {
                              deleteProduct(product._id);
                            }
                          }}
                          className="flex-1 rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blogs View */}
          {view === "blogs" && (
            <div className="space-y-6">
                            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Products Management</h1>
                <Link to={"/admin/addblog"}>
                  <button className="flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                    <span>+ Add Blog </span>
                  </button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <div key={blog._id} className="overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg">
                    <img
                      src={blog.imgSrc || "https://via.placeholder.com/300"}
                      alt={blog.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-bold">{blog.title}</h2>
                      <p className="mt-1 text-sm text-gray-500">By {blog.author || "Anonymous"}</p>
                      <p className="mt-2 text-gray-700 line-clamp-2">{blog.content}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                          {blog.category}
                        </span>
                        {blog.tags.map((tag, index) => (
                          <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Link to={`/edit-blog/${blog._id}`} className="flex-1">
                          <button className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            if (window.confirm("Are you sure you want to delete this blog?")) {
                              deleteBlog(blog._id);
                            }
                          }}
                          className="flex-1 rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default Admin;