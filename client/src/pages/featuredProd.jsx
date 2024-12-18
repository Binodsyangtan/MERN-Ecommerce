import React from 'react'

function featuredProd() {
  return (
    <>
    
     {/* Product Section show slide */}
     <section className="bg-[#FAF4F4] p-14 flex flex-wrap gap-6 justify-center mt-10">
         
            {/* first product slide show  */}
          <div className="bg-[#FAF4F4] p-4 rounded-lg shadow-lg w-full sm:w-60 text-center">
            <img
              src="../slide1.png"
              alt="Side table"
              className="mx-auto mb-4 max-w-full"
            />
            <h3 className="text-lg font-medium text-gray-800">Side table</h3>
            <a
              href="/products"
              className="text-sm font-semibold border-b-2 border-black hover:text-gray-700"
            >
              View More
            </a>
          </div>

          {/* Second Product slide show */}
          <div className="bg-[#FAF4F4] p-4 rounded-lg shadow-lg w-full sm:w-60 text-center">
            <img
              src="../slide3.png"
              alt="Sofa"
              className="mx-auto mb-4 max-w-full"
            />
            <h3 className="text-lg font-medium text-gray-800">Side table</h3>
            <a
              href="/products"
              className="text-sm font-semibold border-b-2 border-black hover:text-gray-700"
            >
              View More
            </a>
          </div>
        </section>
    </>
  )
}

export default featuredProd