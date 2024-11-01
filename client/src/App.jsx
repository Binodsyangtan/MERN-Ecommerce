import React from 'react'
import AppContext from './context/AppContext'
import { useContext } from 'react'
import ShowProduct from './component/product/ShowProduct'

function App() {
  // const data = useContext(AppContext)
  return (
   <>
   {/* <h1 className='text-red-400'>binod</h1> */}
   <ShowProduct/>
   </>
  )
}

export default App

