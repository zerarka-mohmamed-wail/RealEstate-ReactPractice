import React, { useEffect, useState } from 'react';
import left from '../assets/left_arrow.svg';
import right from '../assets/right_arrow.svg';
import { assets,projectsData } from '../assets/assets';





const Projects = () => {
const[currentIndex , setcurrentIndex]= useState(0);
const[cardstoShow,setcardstoShow]=useState(1);
useEffect(()=>{
const updateCardstoShow = ()=>{
  if(window.innerWidth >=1024){
    setcardstoShow(projectsData.length);
  }else if(window.innerWidth >=768){
    setcardstoShow(2)
  }
  else{
    setcardstoShow(1)
  }
};
  updateCardstoShow();

  window.addEventListener('resize',updateCardstoShow);
  return ()=> window.removeEventListener('resize',updateCardstoShow);

},[])

const nextProject =()=>{
    setcurrentIndex((prevIndex)=>(prevIndex +1) % projectsData.length)
}
const prevProject =()=>{
    setcurrentIndex((prevIndex)=>prevIndex===0 ? projectsData.length - 1 :  
prevIndex -1  )
}
  return (
    <div className='flex flex-col items-center container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Navigation Buttons */}
      <div className='flex justify-center items-center py-6 gap-5'>
        <button onClick={prevProject} 
        className='p-3 bg-gray-200 rounded-full flex items-center justify-center' aria-label='Previous Project'>
          <img src={left} alt="Previous" />
        </button>
        <button onClick={nextProject}
        className='p-3 bg-gray-200 rounded-full flex items-center justify-center' aria-label='Next Project'>
          <img src={right} alt="Next" />
        </button>
      </div>
      {/* Project slider container */}
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
        style={{transform:`translateX(-${(currentIndex * 100)/ cardstoShow}%)`}}>
            {projectsData.map((project, index)=> (
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                    <img src={project.image} alt={project.title} />
                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                            <h2 className='text-xl font-semibold text-gray-800'>
                                {project.title}
                            </h2>
                            <p className='text-gray-500 text-sm'>
                                {project.price} <span></span> {project.location}
                            </p>
                        </div>
                        
                    </div>
                    

                </div>
            ))}
        </div>
      </div>

    </div>
  );
}

export default Projects;
