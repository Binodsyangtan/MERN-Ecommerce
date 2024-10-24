
import { Cart } from "../Models/Cart.js";

//add to cart
// export const addToCart = async (req, res) => {
//     const { productId, title, price, quantity, imgSrc } = req.body;
    
//     const userId = "671655ba6daf69332228e849"; // Static userId, replace with real user authentication later
//     let cart = await Cart.findOne({ userId });
    
//     if (!cart) {
//         cart = new Cart({ userId, items: [] });
//     }
//     quantity = parseInt(quantity,10);
//     price = parseFloat(price)
    

//     const itemIndex = cart.items.findIndex((item) => item.productId && item.productId.toString() === productId);
    
//     if (itemIndex > -1) {
//         const item = cart.items[itemIndex]

//         // Update the existing item quantity and price
//         item.quantity += quantity;
//         cart.items[itemIndex].price += price * quantity;
//     } else {
//         // Add a new item to the cart
//         cart.items.push({ productId, title, price, quantity, imgSrc });
//     }

//     await cart.save();
//     res.json({ message: "Items added to cart", cart });
// };

export const addToCart = async (req, res) => {
    let { productId, title, price, quantity, imgSrc } = req.body;

    const userId = "671655ba6daf69332228e849"; // Static userId, replace with real user authentication later
    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, items: [] });
    }

    // Convert quantity and price to numbers to avoid string concatenation
    quantity = parseInt(quantity, 10); // Or parseFloat for decimals
    price = parseFloat(price);

    const itemIndex = cart.items.findIndex((item) => item.productId && item.productId.toString() === productId);

    if (itemIndex > -1) {
        const item = cart.items[itemIndex];

        // Update the existing item quantity and price
        item.quantity += quantity;
        item.price += price * quantity; // Add price based on quantity added
    } else {
        // Add a new item to the cart
        cart.items.push({ productId, title, price, quantity, imgSrc });
    }

    await cart.save();
    res.json({ message: "Items added to cart", cart });
};



//get user cart
export const userCart = async (req,res)=>{
    const userId = "671655ba6daf69332228e849";

    let cart = await Cart.findOne({userId})
    if(!cart) return res.json ({message:'cart not found'})

    res.json({message:'user cart', cart})
}



//remove product form cart
export const removeProductFromCart = async (req, res) => {
    const productId = req.params.productId;
    const userId = "671655ba6daf69332228e849"; // Static userId, replace with real user authentication later

    let cart = await Cart.findOne({ userId });
   

    if (!cart) {
        return res.json({ message: 'Cart not found' });
    }

    // Filter out the item with the matching productId, but check if item.productId exists
    // guard against undefinded added item.productId && to enusre that item.productId exists before trying to call toString() on it
    cart.items = cart.items.filter((item) => {
        return item.productId && item.productId.toString() !== productId;
    });

    await cart.save(); // Save the updated cart

    res.json({ message: 'Product removed from cart', cart });
};

//delete all the product form the cart
//clear cart
export const clearCart = async (req,res) =>{
    
    const userId = "671655ba6daf69332228e849";
    let cart = await Cart.findOne({userId});
    if(!cart){
        cart = new Cart({items:[]});
    } else{
        cart.items =[];

    }

    await cart.save();
    res.json({message:'cart clear ',cart})

}

//decrease quantity 
export const decreaseProductQuantity = async (req, res) => {
    const { productId, quantity } = req.body;
    
    const userId = "671655ba6daf69332228e849"; // Static userId, replace with real user authentication later
    let cart = await Cart.findOne({ userId });
    
    if (!cart) {
        cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex((item) => item.productId && item.productId.toString() === productId);
    
    if (itemIndex > -1) {
        //kun item ko decrease garni qty tesko index item ma rakheko
        const item = cart.items[itemIndex]

        if(item.quantity > quantity){
            //one unit product ko price nikaleko 
            const pricePerUnit = item.price/item.quantity;

            item.quantity -= quantity;
            item.price -= pricePerUnit * quantity;
        }else{
            cart.items.splice(itemIndex,1)
        }
        
    } else {
        
        return res.json({message:'invalid prodcut id'})
    }

    await cart.save();
    res.json({ message: "item quantity decrease", cart });

};


