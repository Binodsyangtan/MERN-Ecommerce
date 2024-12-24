import express from 'express'
import { createBlogPost, getBlogById, getBlogs, UpdateBlogById} from '../Controllers/blog.js';
const router = express.Router();

router.post("/create", createBlogPost);
router.get("/getblogs", getBlogs);
router.get("/:id", getBlogById);
router.put("/update/:id", UpdateBlogById);

export default router;
