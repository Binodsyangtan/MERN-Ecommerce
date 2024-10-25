import express from 'express'
import { addToCart, clearCart, decreaseProductQuantity, removeProductFromCart, userCart } from '../Controllers/cart.js';

//import middlware 
import { Authenticated } from '../Middlewares/auth.js';

const router =  express.Router();

//add to cart
//first Authenticated middleware funtion chlxa and check garxa token and then if token header bata aako xa vane addTOCart funtion next le point out garera chalxa if !token aako xaina vane middleware tai stop hunxa and addtocart garna mildaina 
router.post('/add',Authenticated,addToCart)


//get user cart
router.get('/user',Authenticated,userCart)


//remove product form cart
router.delete('/remove/:productId',Authenticated,removeProductFromCart)

//clear cart
router.delete('/clear',Authenticated,clearCart)

//decrease quantity
router.post('/--quantity',Authenticated,decreaseProductQuantity)

export default router;
