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



function App() {
  // const data = useContext(AppContext)
  return (
   <Router>
    <ToastContainer/>  {/* yesari rakhe jata ni call garna millne hunxa so yeha rakheko  */}
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/products' element={<ShowProduct/>}/>
        <Route path='/myaccount' element={<MyAccount/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
       
        
        
      </Routes>
   
    
   {/* <ShowProduct/>  */}
   {/* <ProductPage/> */}
   {/* <FeaturedProd/> */}
   </Router>
  )
}

export default App

