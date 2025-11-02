import React from 'react'
import { ReactTyped } from 'react-typed'


function Front() {
  return (
    <>
      <div className='mx-auto flex w-[88%] pt-[25vh]'>
      <div className='flex flex-col items-center pr-4'>
        <div className='h-[200px] w-[2px] bg-linear-to-b from-[#020913ff] to-[#4E9FE5]'> </div>
        <div className='h-[15px] w-[15px] bg-[#4E9FE5] rounded-xl'></div>
        <div className='h-[200px] w-[2px] bg-linear-to-t from-[#020913ff] to-[#4E9FE5]'> </div>
      </div>
        <div>
        <h5 className='text-[#4E9FE5] font-semibold text-[33px] h-[25px]'>Assalam O Alaikum, I'm-</h5>
        <h3 className='text-white text-[85px] md:text-[50px] mb-1 font-black'>Muhammad Mujtaba</h3>
        <ReactTyped strings={["Full Stack Web Developer","Full Stack Web Developer",]} typespeed={10} backspeed={10} loop className='text-white text-[33px] font-medium' /> 
        <p className='text-[#b8b8b8ff] text-[19px] font-medium w-[50vw] md:w-[80vw] mt-7 mb-10'>I am an aspiring web developer with a strong foundation in HTML, CSS, Tailwind, JavaScript and React.js. Recently completed a Diploma in Information Technology (2024–2025).</p>
        <button className='h-[40px] w-[125px] bg-[#0f1b2cff] hover:bg-[#1e3049ff] rounded-md text-white font-medium text-[17px] duration-300 ease-in-out'>Resume</button>
        <button className='h-[40px] w-[125px] bg-[#0f1b2cff] hover:bg-[#1e3049ff] rounded-md text-white font-medium text-[17px] duration-300 ease-in-out ml-4'>LinkedIn</button>
        </div> 
    </div>
    </>
  )
}

export default Front