import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../pages/Navbar";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); // State to store the blog details
  const url = "http://localhost:8000/api";

  // Fetch blog details
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${url}/blog/${id}`); // API to get blog by ID
        console.log(response.data.data);

        setBlog(response.data.data); // Assuming `blog` is returned in the API response
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>; // Show a loading state until the data is fetched
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto p-6">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-gray-500">
          <span>Home</span> &gt; <span>Blogs</span> &gt;{" "}
          <span className="font-bold text-gray-900">{blog.title}</span>
        </nav>

        {/* Blog Content */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Blog Image */}
          <div className="w-full lg:w-1/2">
            <div className="flex h-96 items-center justify-center rounded-lg bg-[#FFF9E5]">
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="max-h-full max-w-full object-cover"
              />
            </div>
          </div>

          {/* Blog Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="mb-4 text-3xl font-bold">{blog.title}</h1>
            <p className="mb-2 text-gray-600">
              <strong>Author:</strong> {blog.author || "Anonymous"}
            </p>
            <p className="mb-4 text-gray-600">
              <strong>Category:</strong> {blog.category}
            </p>
            <p className="mb-4 text-gray-600">
              <strong>Tags:</strong> {blog.tags.join(", ") || "No Tags"}
            </p>
            <div className="mt-4">
              <p>{blog.content}</p>
            </div>
          </div>
        </div>

        {/* Related Blogs Placeholder */}
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Related Blogs</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for related blogs */}
            <div className="rounded-md bg-gray-100 p-4 shadow-sm">
              <p className="text-gray-700">Feature coming soon!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
