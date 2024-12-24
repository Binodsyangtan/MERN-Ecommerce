import { Blogs } from "../Models/Blog.js";

//create blog post
export const createBlogPost = async (req, res) => {
  const { title, content, author, tags, category, imgSrc } = req.body;
  try {
    let blog = await Blogs.create({
      title,
      content,
      author,
      tags,
      category,
      imgSrc,
    });
    res.status(201).json({
      message: "blog created successfully...",
      blog,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occured while creating the blog ",
    });
  }
};

//get all blogs
export const getBlogs = async (req, res) => {
  let blogs = await Blogs.find().sort({ createdAt: -1 });
  res.json({ message: "all blogs", blogs });
};

//find blog by id

export const getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blogs.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }
    //else response with blog details
    res.status(200).json({
      success: true,
      message: "Blog post fetched successfully",
      data: blog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "an error occured while fetching the blog post",
    });
  }
};

//find by id and update blog

export const UpdateBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blogs.findByIdAndUpdate(id, req.body, { new: true });
    if (!blog)
      return res.status(404).json({ success: false, message: "invalid id" });
    res.json({success:true,message:"blog has been updated", blog})
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success:false,
      message:"error occured while updating the blog"
    })
    
  }
};
