import express from 'express'
import { createBlogPost, getBlogById, getBlogs} from '../Controllers/blog.js';
const router = express.Router();

router.post("/create", createBlogPost);
router.get("/getblogs", getBlogs);
router.get("/:id", getBlogById);

export default router;
