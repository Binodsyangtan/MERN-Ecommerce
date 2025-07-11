import React from 'react'
import AppContext from './context/AppContext'
import { useContext } from 'react'
import ShowProduct from './component/product/ShowProduct'
import Home from './pages/Home'
import FeaturedProd from './pages/featuredProd'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import MyAccount from './pages/MyAccount'
import Contact from './component/Contact/Contact'
import FilterBar from './component/product/FilterBar'
// import Log from './component/myAccount/login'
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from './component/myAccount/Profile'
import Cart from './component/cart/Cart'
import Checkout from './component/cart/CheckOut'
import SearchProducts from './component/product/SearchProducts'
import ProductDetail from './component/product/ProductDetail'
import Admin from './component/myAccount/Admin'
import EditProduct from './component/product/EditProduct'
import TopPicks from './component/product/TopPicks'
import Footer from './pages/Footer'
import BlogForm from './component/blog/Blog'
import BlogList from './component/blog/ShowBlog'
import BlogDetails from './component/blog/BlogDetails'
import EditBlog from './component/blog/EditBlog'
import Addproduct from './component/product/Addproduct'
import Reg from './component/myAccount/register'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import KhaltiCheckout from 'khalti-checkout-web'
import KhaltiPayment from './component/payment/KhaltiPayment'

function ScrollToTop(){
  const {pathname} = useLocation();
  useEffect(() => {
  window.scrollTo(0, 0); // Reset scroll to top
}, [pathname]);
  return null; //this component doesnot render anything
}






function App() {
  // const data = useContext(AppContext)
  return (
    <Router>

     <ScrollToTop/>
    <ToastContainer/>  {/* yesari rakhe jata ni call garna millne hunxa so yeha rakheko  */}
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/products' element={<ShowProduct/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/products/search/:term' element={<SearchProducts/>}/>
        <Route path='/account' element={<MyAccount/>}/>
        <Route path='/register' element={<Reg/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart/Checkout' element={<Checkout/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/edit-product/:id' element={<EditProduct/>}/>
        <Route path='/toppicks' element={<TopPicks/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/admin/addblog' element={<BlogForm/>}/>
        <Route path='/bloglist' element={<BlogList/>}/>
        <Route path='/bloglist/:id' element={<BlogDetails/>}/>
        <Route path='/edit-blog/:id' element={<EditBlog/>}/>
        <Route path='/admin/addproduct' element={<Addproduct/>}/>
        <Route path='/payment' element={<KhaltiPayment/>}/>

       
       
        
        
      </Routes>
   
    
   {/* <ShowProduct/>  */}
   {/* <ProductPage/> */}
   {/* <FeaturedProd/> */}
   </Router>
  )
}

export default App

