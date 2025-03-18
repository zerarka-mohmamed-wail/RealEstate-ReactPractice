import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden'id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-400 mt-4'>Hi, I’m Wail, and I’m excited to share this website I’ve been working on! It’s a fun project I created to learn new things and explore web development. This site was built using Vite, Tailwind CSS, and React, which made the process both smooth and enjoyable. Thanks for stopping by—I hope you like it!</p>
        </div>
        <div>
            <h3 className='text-white text-lg font-bold mb-4'>
                Company
            </h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About</a>
                <a href="#Contact" className='hover:text-white'>Contact Us</a>
                <a href="#" className='hover:text-white'>Pricavy Policy</a>
            </ul>
        </div> 
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Follow me</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The lastest news , articles and resources , sent to your inbox weekly</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter Your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
                <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
            </div>
        </div>  
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright © this project is a test . All Right Reserved
      </div>
    </div>
  )
}

export default Footer
