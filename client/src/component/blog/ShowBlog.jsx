import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../pages/Navbar";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import Footer from "../../pages/Footer";
import PageHeader from "../PageHeader";

const BlogList = () => {
  const { blogs, loading, error } = useContext(AppContext);
  //      const url = "http://localhost:8000/api";
  //   const [blogs, setBlogs] = useState([]); // State to store blogs
  //   const [loading, setLoading] = useState(true); // State to show loading status
  //   const [error, setError] = useState(""); // State to show errors

  //   useEffect(() => {
  //     // Fetch blogs from the API
  //     const fetchBlogs = async () => {
  //       try {
  //         const response = await axios.get(`${url}/blog/getblogs`);
  //         setBlogs(response.data.blogs || []); // Assuming 'blogs' is in the response
  //         setLoading(false);
  //       } catch (err) {
  //         console.error(err);
  //         setError("Failed to load blogs");
  //         setLoading(false);
  //       }
  //     };

  //     fetchBlogs();
  //   }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <Navbar />
      <PageHeader/>
      <div className="mx-auto max-w-5xl p-6">
        {/* <h1 className="mb-6 text-center text-2xl font-bold">Blogs</h1> */}
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs available.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="rounded-lg border p-4 shadow transition duration-300 hover:shadow-md"
              >
                <Link to={`/bloglist/${blog._id}`}>
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
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogList;
