import{ Blogs} from "../Models/Blog.js";

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

 export const getBlogs = async(req,res) =>{
    let blogs =  await Blogs.find().sort({ createdAt: -1 });
    res.json({ message: "all blogs",blogs });
 }
