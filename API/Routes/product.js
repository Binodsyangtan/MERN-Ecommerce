import express from 'express'
import { addProduct, deleteProductById, getproduct, getProductById, updateProductById } from '../Controllers/product.js';

const router = express.Router();

//add product
router.post('/add',addProduct)

//get product
router.get('/all',getproduct)

//get productById

//:id xa so const id = req.params.id lekhne 
//if  /:binod rakhe  const id = req.params.binod nai lekhnu parxa
router.get('/:id',getProductById)

//updateProductByid
router.put('/:id',updateProductById)

//delelteProductById
router.delete('/:id',deleteProductById)

export default router