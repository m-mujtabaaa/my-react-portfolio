import React from 'react'

function Navbar() {
  return (
    <>
    <div className='w-[100vw] fixed'>
    <div className='w-[90%] mx-auto h-[77px] bg-[#01060cff] flex  border-b-[1px] border-[#272727ff]'>
        <h2 className='py-5 px-10 text-[#868686ff] text-[24px] grow font-black'>&lt;/<span className='text-[#ffffffff]'>Mujtaba</span>&gt;</h2>
    <ul className='flex text-[#b8b8b8ff] font-semibold py-7 px-10 text-[15px]'>
        <li className='mx-5 duration-300 hover:text-white'><a href="#">Home</a></li>
        <li className='mx-5 duration-300 hover:text-white'><a href="#Project">Projects</a></li>
        <li className='mx-5 duration-300 hover:text-white'><a href="#Contact">Contact</a></li>
    </ul>
  </div>
  </div>
    </>
  )
}

export default Navbar