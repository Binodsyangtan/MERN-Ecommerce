import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

function ShowProduct() {
    const {products} = useContext(AppContext)
    console.log(products);
    
  return (
    <>
   

    {products?.map((product) => ( 
      <div key={product._id} className=''>
        <div className='  border-2 border-black bg-yellow-300 h-[150px] w-[150px] text-center'>
          <div className='flex justify-center '> 

          <img src={product.imgSrc} alt="" />
          </div>
          <div className=''>

          <h1>{product.title}</h1>
          <button className='bg-red-500'>go somewher</button>
          </div>
          
         
         
        </div>
    </div>)
  )}
   
    </>
  )
}

export default ShowProduct