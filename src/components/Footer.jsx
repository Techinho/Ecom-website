import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div> 
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae labore quod quaerat quasi, hic nulla iure nam possimus? Delectus qui asperiores eos eaque corporis animi laborum impedit, pariatur illum?
            </p>
         </div>
        
         <div>
 <p className='text-xl font-meduim mb-5 '>COMPANY</p>
         <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>

         </ul>
         </div>
         <div>
            <p className='text-xl font-medium mb-5'>
                GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
               <li>+212-682146122</li>
               <li>ilyassezzaouya4@gmail.com</li>
            </ul>
         </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-center text-sm'>Copyright@2024 Forever.com</p>
        </div>
    </div>
  )
}

export default Footer