import React from 'react';
import brandImg from '../assets/brand_img.png'; // Ensure correct path

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={brandImg} alt="Brand" className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Experiance</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Project Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Project Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>Hi, I’m Wail, and I’m excited to share this website I’ve been working on! It’s a fun project I created to learn new things and explore web development. This site was built using Vite, Tailwind CSS, and React, which made the process both smooth and enjoyable. Thanks for stopping by—I hope you like it!</p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
        </div>  
      </div>
    </div>
  );
}

export default About;
