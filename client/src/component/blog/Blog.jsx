import React, { useState } from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BlogPostForm = () => {
  // State to store form inputs
  const url = "https://mern-ecommerce-binod.onrender.com/api";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [imgSrc, setImgSrc] = useState("");
   const navigate = useNavigate()
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !category || !author || !imgSrc) {
        alert("Please fill in all required fields.");
        return;
      }

    // Prepare blog data
    const blogData = {
      title,
      content,
      author,
      tags: tags.split(",").map((tag) => tag.trim()), // Convert comma-separated string to array
      category,
      imgSrc,
    };

    try {
      // Send a POST request to create the blog
      const response = await axios.post(`${url}/blog/create`, blogData);

      // Handle successful response
      if (response.data.success) {
        alert("Blog post created successfully!");
        // Reset the form fields
        setTitle("");
        setContent("");
        setAuthor("");
        setTags("");
        setCategory("");
        setImgSrc("");
      }
      setTimeout(() => {
        navigate("/admin")
        
      }, 1500);
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("There was an error creating the blog post.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Create a New Blog Post</h1>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter blog content"
            rows="5"
            required
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter author name"
            required
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter tags (e.g., tech, lifestyle)"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter blog category"
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="imgSrc" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="imgSrc"
            value={imgSrc}
            onChange={(e) => setImgSrc(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Create Blog Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
