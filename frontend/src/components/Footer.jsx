import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text_sm'>
        <div>
            <img src={assets.logo_proiectPA} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                We curate sneakers and tops that blend modern design with all-day comfort. Our mission is simple: quality pieces, fair prices, and effortless style.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-300'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul  className='flex flex-col gap-1 text-gray-300'>
                <li>+40 722 222 225</li>
                <li>hoh@houseofhype.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @HouseOfHype all rights reserved</p>
      </div>
    </div>
  )
}

export default Footer