import express from 'express'
import { addToCart, clearCart, decreaseProductQuantity, removeProductFromCart, userCart } from '../Controllers/cart.js';

const router =  express.Router();

//add to cart
router.post('/add',addToCart)


//get user cart
router.get('/user',userCart)


//remove product form cart
router.delete('/remove/:productId',removeProductFromCart)

//clear cart
router.delete('/clear',clearCart)

//decrease quantity
router.post('/--quantity',decreaseProductQuantity)

export default router;
