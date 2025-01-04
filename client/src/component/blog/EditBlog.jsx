import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Bounce } from "react-toastify";

const EditBlog = () => {
  const url = "https://mern-ecommerce-binod.onrender.com/api";
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate(); // For redirecting after updating
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    tags: "",
    category: "",
    imgSrc: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch blog details by ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${url}/blog/${id}`);
        const fetchedBlog = response.data.data;

        setBlog({
          title: fetchedBlog.title,
          content: fetchedBlog.content,
          author: fetchedBlog.author,
          tags: fetchedBlog.tags.join(", "),
          category: fetchedBlog.category,
          imgSrc: fetchedBlog.imgSrc,

        });
        
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      }
    };
    fetchBlog();
    
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${url}/blog/update/${id}`, blog);
      if (response.status === 200) {
        toast.success(response.data.message || "Blog updated successfully!", {
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

        // Redirect to admin view and set the view to "blog"
        navigate("/admin?view=blog");
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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-6 text-center text-2xl font-bold">Edit Blog</h1>
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
            value={blog.title}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={blog.content}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter blog content"
            rows="5"
            required
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={blog.author}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter author name"
            required
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700"
          >
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={blog.tags}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter tags (e.g., tag1, tag2)"
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
            value={blog.category}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter blog category"
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
            value={blog.imgSrc}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-600"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
