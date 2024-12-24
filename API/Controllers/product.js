import { Products } from "../Models/product.js";

//add product
export const addProduct = async (req, res) => {
  const { title, description, price, category, quantity, imgSrc } = req.body;
  try {
    let product = await Products.create({
      title,
      description,
      price,
      category,
      quantity,
      imgSrc,
    });
    res.json({
      message: "product created successfully...",
      product,
      success: true,
    });
  } catch (error) {
    res.json(error.message);
  }
};

//get products
export const getproduct = async (req, res) => {
  let products = await Products.find().sort({ createdAt: -1 });
  res.json({ message: "all product", products });
};

//find product by id
export const getProductById = async (req, res) => {
  const id = req.params.id;
  
  let product = await Products.findById(id);
  if (!product) return res.json({ message: "invalid id" });
  res.json({ message: "Specific product", product });
};

//update product by id
export const updateProductById = async (req, res) => {
  const id = req.params.id;
  let product = await Products.findByIdAndUpdate(id, req.body, { new: true });
  if (!product) return res.json({ message: "invalid id" });
  res.json({ message: "Product has been updated", product });
};

export const deleteProductById = async (req, res) => {
  const id = req.params.id;
  let prodcut = await Products.findByIdAndDelete(id);
  if (!prodcut) return res.json({ message: "invalid id " });
  res.json({ message: "Product has been deleted..", prodcut });
};


