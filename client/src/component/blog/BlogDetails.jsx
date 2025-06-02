import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../pages/Navbar";
import Footer from "../../pages/Footer";
import { FiCalendar, FiUser, FiTag, FiArrowLeft } from "react-icons/fi";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://mern-ecommerce-binod.onrender.com/api";

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${url}/blog/${id}`);
        setBlog(response.data.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF4F4]">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <div className="inline-block h-12 w-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-600">Loading blog post...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FAF4F4]">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-gray-800">Oops! Something went wrong</h3>
          <p className="mt-2 text-gray-600 max-w-md mx-auto">{error}</p>
          <Link 
            to="/bloglist"
            className="mt-6 inline-block px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FAF4F4]">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Blog Not Found</h3>
          <p className="mt-2 text-gray-600 max-w-md mx-auto">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/bloglist"
            className="mt-6 inline-block px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Browse All Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4F4]">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
          {/* Back button */}
          <Link 
            to="/bloglist" 
            className="flex items-center text-amber-600 hover:text-amber-700 mb-6 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Blogs
          </Link>

          {/* Blog Content */}
          <article className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
              <img
                src={blog.imgSrc || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <FiUser className="mr-2" />
                  {blog.author || "Anonymous"}
                </div>
                {blog.category && (
                  <div className="flex items-center">
                    <FiTag className="mr-2" />
                    {blog.category}
                  </div>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>

              <div className="prose max-w-none text-gray-700">
                {blog.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>

              {blog.tags?.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">TAGS</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* Related Blogs */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Placeholder for related blogs */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <p className="text-gray-500 mb-4">We're working on bringing you more related content</p>
                <Link 
                  to="/bloglist" 
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Browse all blogs
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;