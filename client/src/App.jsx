import React from 'react'
import AppContext from './context/AppContext'
import { useContext } from 'react'
import ShowProduct from './component/product/ShowProduct'
import Home from './pages/Home'
import FeaturedProd from './pages/featuredProd'

function App() {
  // const data = useContext(AppContext)
  return (
   <>
   
    <Home/>
   <ShowProduct/> 
   {/* <ProductPage/> */}
   <FeaturedProd/>
   </>
  )
}

export default App

