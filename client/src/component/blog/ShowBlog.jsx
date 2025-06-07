import React from "react";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import Footer from "../../pages/Footer";

const BlogList = () => {
  const { blogs, loading, error } = useContext(AppContext);

  // Loading state
  if (loading) return (
    <div className="min-h-screen bg-[#FAF4F4]">
      <Navbar />
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="inline-block h-12 w-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-600">Loading our latest articles...</p>
      </div>
      <Footer />
    </div>
  );

  // Error state
  if (error) return (
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
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
          Try Again
        </button>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4F4]">
      <Navbar />
      
      {/* Blog Header */}
            <header className="bg-[#FBEBB5]">
        <div className="container mx-auto px-4 py-10 md:py-12 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl animate-float">
            Our Blogs
          </h1>
          <p className="mx-auto max-w-lg text-gray-600">
            Discover insights, trends, and inspiration from out design experts
          </p>
        </div>
      </header>


      {/* Blog Posts */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        {blogs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-4 text-xl font-medium text-gray-800">No articles yet</h3>
            <p className="mt-2 text-gray-600">Check back later for new posts</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article 
                key={blog._id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/bloglist/${blog._id}`} className="block h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.imgSrc || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-amber-600 font-medium">{blog.category}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">{blog.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">{blog.content}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">By {blog.author || "Anonymous"}</span>
                      <div className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;