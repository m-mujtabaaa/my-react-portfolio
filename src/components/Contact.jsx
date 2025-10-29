import React from 'react'

function Contact() {
  return (
     <>
    <div className='h-[85vh] w-full bg-[#01060cff] flex justify-center items-center' id='Contact'>
        <div className='h-[30vh]'>
          <h2 className='text-white font-black text-[48px] text-center mb-[5vh]'>Keep In Touch</h2>
          <p className='text-[#b8b8b8ff] text-[17px] text-center'>I'm currently specializing in <span className='text-[#4E9FE5] '>Front-end Development</span>.</p>
            <p className='text-[#b8b8b8ff] text-[17px] text-center mb-[7vh]'>Feel free to get in touch and talk more about your projects.</p>
            <button className='h-[40px] w-[125px] bg-[#0f1b2cff] hover:bg-[#1e3049ff] rounded-md text-white font-medium text-[17px] duration-300 ease-in-out ml-4'>Resume</button>
            <button className='h-[40px] w-[125px] bg-[#0f1b2cff] hover:bg-[#1e3049ff] rounded-md text-white font-medium text-[17px] duration-300 ease-in-out ml-4'>Email</button>
            <button className='h-[40px] w-[125px] bg-[#0f1b2cff] hover:bg-[#1e3049ff] rounded-md text-white font-medium text-[17px] duration-300 ease-in-out ml-4'>LinkedIn</button>
        </div>
    </div>
    </>
  )
}

export default Contact