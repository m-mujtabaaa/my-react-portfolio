import React from 'react'

function Project() {
  return (
    <>
        <div className='w-[90%] mx-auto pt-[25vh] px-[20px]'  id='Project'>
          <h2 className='text-white font-bold text-[40px] '>Project</h2>
          <p className='text-[#b8b8b8ff] w-[40vw] pt-3 font-medium'>Here's some of my projects that I have worked on.</p>
          <div className='py-[5vh]'>
            <div className='h-[60vh] w-[45vw] rounded-xl bg-[#061120ff] border-b-[2px] border-white'>
              <div className='h-[32.5vh] bg-purple-200 rounded-t-lg'></div>
              <h2 className='text-white font-semibold py-3 px-4 text-[22px]'>TechServe Website</h2>
              <div className='bg-[#636363ff] h-[1px]'/>
              <p className='text-[#b8b8b8ff] py-3 px-4 font-medium'>This is my first project, Build with html and css only.</p>
            </div>
         </div>
        </div>
    </>
  )
}

export default Project