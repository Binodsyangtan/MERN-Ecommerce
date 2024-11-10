import React from 'react'
import AppContext from './context/AppContext'
import { useContext } from 'react'
import ShowProduct from './component/product/ShowProduct'
import Home from './pages/Home'
import FeaturedProd from './pages/featuredProd'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import MyAccount from './pages/MyAccount'
import Contact from './component/Contact/Contact'

function App() {
  // const data = useContext(AppContext)
  return (
   <Router>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/products' element={<ShowProduct/>}/>
        <Route path='/myaccount' element={<MyAccount/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        
        
      </Routes>
   
    
   {/* <ShowProduct/>  */}
   {/* <ProductPage/> */}
   {/* <FeaturedProd/> */}
   </Router>
  )
}

export default App

