import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

function ShowProduct() {
    const {products} = useContext(AppContext)
    console.log(products);
    
  return (
    <>
    {products?.map((product) =><div key={product._id}>
        <h1>{product.title}</h1>
    </div>)}
    </>
  )
}

export default ShowProduct