import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
const Testimonails = () => {
  return (
    <div className='flex flex-col items-center container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Testimonails'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonails</span> </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Real Reviews from People We Dealt With</p>
      <div className='flex gap-6 flex-nowrap px-4'>
        {testimonialsData.map((testimonial,index)=>(
            <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                <img className='w-20 h-20 rounded-full mx-auto mb-1' src={testimonial.image} alt={testimonial.alt} />
                <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length: testimonial.rating},(item,index)=>(
                        <img key={index} src={assets.star_icon} alt="" />
                        
                    ))}
                </div>
                <p className='text-gray-600'>{testimonial.text}</p>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Testimonails
