import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Navbar from '../../pages/Navbar'
import { Link } from 'react-router-dom'

function ShowProduct() {
  const { products } = useContext(AppContext)

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <div key={product._id} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white hover:bg-[#FBEBB5]">
            {/* div mai click garda singleprodcut ma laijanxa  */}
            <Link to={"SingleProduct"}>
            <div className="flex justify-center items-center h-40">
              {/* Product image */}
              <img src={product.imgSrc} alt={product.title} className="max-h-full" />
            </div>
            {/* Product title */}
            <h2 className="text-lg font-medium mt-4 mb-2 text-center">{product.title}</h2>
            {/* Product price */}
            <p className="text-center text-gray-700 mb-4">Rs. {product.price}</p>
            {/* Button
            <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">Details</button> */}
        </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ShowProduct
