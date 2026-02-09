import React from 'react'

function Project() {
  return (
    <>
        <div className='w-[88%] mx-auto pt-[15vh]'  id='Project'>
          <h2 className='text-white font-bold text-[40px] '>Project</h2>
          <p className='text-[#b8b8b8ff] pt-3 font-medium'>Here's some of my projects that I have worked on.</p>
          <div className='py-[5vh] flex flex-col md:flex-row gap-10'>
            <div className='h-[320px] md:h-[370px] w-full md:w-[45vw]  rounded-xl bg-[#061120ff] border-b-[2px] border-white'>
              <a href="https://tech-serve-react.vercel.app/"><img src='techserve-ss.jpg' className='h-[160px] w-full md:h-[190px] bg-purple-200 rounded-t-lg'/></a>
              <h2 className='text-white font-semibold py-3 px-4 text-[22px]'>TechServe Website</h2>
              <div className='bg-[#636363ff] h-[1px]'/>
              <p className='text-[#b8b8b8ff] py-3 px-4 font-medium'>This is my first project, Build with react.js and tailwind.</p>
            </div>

            <div className='h-[320px] md:h-[370px] hidden w-full md:w-[45vw]  rounded-xl bg-[#061120ff] border-b-[2px] border-white'>
              <a href="https://tech-serve-react.vercel.app/"><img src='techserve-ss.jpg' className='h-[160px] w-full md:h-[190px] bg-purple-200 rounded-t-lg'/></a>
              <h2 className='text-white font-semibold py-3 px-4 text-[22px]'>TechServe Website</h2>
              <div className='bg-[#636363ff] h-[1px]'/>
              <p className='text-[#b8b8b8ff] py-3 px-4 font-medium'>This is my first project, Build with react.js and tailwind.</p>
            </div>
         </div>
        </div>
    </>
  )
}

export default Project