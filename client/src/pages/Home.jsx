import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { CiSearch,CiHeart,CiShoppingCart } from "react-icons/ci";

export default function Home() {
  return (
    <>
    <header className='' >
       <div className='bg-[#FBEBB5] md:h-[1000px] h-[700px] static'>
       <nav className=' container flex  justify-around  items-center  h-[100px] w-auto'>
            <div className='flex gap-3 list-none '>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </div>
            <div className=' flex gap-5 h-[28px] items-center'>
                <VscAccount />
                <CiSearch />
                <CiHeart/>
                <CiShoppingCart/>
                
                
            </div>
        </nav>
        <div className='container mx-auto '>
          <section className=' px-4 md:flex md:items-center md:justify-between'>

          <div className='md:w-1/2 mb-5 md:mb-0'>
           <h1 className='text-3xl font-bold mb-4 '>Rocket single seater </h1>
            <a href="#" className='inline-block text-sm font-semibold border-b-2 border-black hover:text-red-700'>shop now</a>
          </div>
          <div className=' md:w-1/2  flex justify-center'>
            <img src="../chai.png" className='h-[400px] md:h-[700px]' />
          </div>


          </section>

        </div>

       </div>

    </header>

   
    
    </>
  )
}
