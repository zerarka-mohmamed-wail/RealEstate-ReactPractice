import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg'; // Ensure the correct path to your logo
import menuIcon from '../assets/menu_icon.svg'; // Adjust path if needed
import crossIcon from '../assets/cross_icon.svg';

const Navbar = () => {
  const[showMobileMenu,setShowMobileMenu] = useState(false)

useEffect(()=> {
  if(showMobileMenu){
    document.body.style.overflow= 'hidden'
  }else{
    document.body.style.overflow= 'auto'
  }
  return ()=>{
    document.body.style.overflow= 'auto'
  };
},[showMobileMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={logo} alt="Logo" className="h-10" />

        <ul className="hidden md:flex gap-7 text-white">
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
          <li><a href="#About" className="cursor-pointer hover:text-gray-400">About</a></li>
          <li><a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a></li>
          <li><a href="#Testimonails" className="cursor-pointer hover:text-gray-400">Testimonails</a></li>
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full shadow-md">
          Sign up
        </button>
        <img onClick={()=> setShowMobileMenu(true)} src={menuIcon} className="md:hidden w-7" alt="Menu" />

      </div>
      {/*----------------mobile-menu--------*/}
      <div className={`md:hidden ${showMobileMenu ? `fixed w-full` : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
        <img onClick={()=> setShowMobileMenu(false)} src={crossIcon} className="w-6" alt="Close" />

        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=> setShowMobileMenu(false)} href="" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=> setShowMobileMenu(false)} href="" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=> setShowMobileMenu(false)}href="" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={()=> setShowMobileMenu(false)}href="" className='px-4 py-2 rounded-full inline-block'>Testimonails</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
