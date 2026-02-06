import React from 'react'

function Contact() {
  
  return (
     <>
    <div className='h-[85vh] w-[100%] px-[22px] bg-[#01060cff] flex justify-center items-center' id='Contact'>
        <div className='h-[30vh]'>
          <h2 className='text-white font-black text-[38px] md:text-[48px] text-center mb-[5vh]'>Keep In Touch</h2>
          <p className='text-[#b8b8b8ff] text-[17px] text-center'>I'm currently specializing in <span className='text-[#4E9FE5] '>Front-end Development</span>.</p>
            <p className='text-[#b8b8b8ff] text-[17px] text-center mb-[7vh]'>Feel free to get in touch and talk more about your projects.</p>
            <div className='w-full flex flex-row justify-center items-center'>
            <button onClick={() => window.open("https://.com", "_blank")}  className='h-[30px] md:h-[40px] w-[105px] md:w-[125px] bg-[#0f1b2cff] hover:bg-[#1e3049ff] rounded-md text-white font-medium text-[14px] md:text-[17px] duration-300 ease-in-out ml-0'>Resume</button>
            <button onClick={() => window.open("https://github.com", "_blank")}  className='h-[30px] md:h-[40px] w-[105px] md:w-[125px] bg-[#0f1b2cff] hover:bg-[#1e3049ff] rounded-md text-white font-medium text-[14px] md:text-[17px] duration-300 ease-in-out ml-[1vw]'>Email</button>
            <button onClick={() => window.open("https://github.com", "_blank")}  className='h-[30px] md:h-[40px] w-[105px] md:w-[125px] bg-[#0f1b2cff] hover:bg-[#1e3049ff] rounded-md text-white font-medium text-[14px] md:text-[17px] duration-300 ease-in-out ml-[1vw]'>WhatsApp</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Contact