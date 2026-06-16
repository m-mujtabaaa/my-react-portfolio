import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { ReactTyped } from 'react-typed'

function Footer() {
   useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
  

  return (
    <>
    <div className='w-[88%] h-[60px] mx-auto'
    data-aos="fade-up">
        <p className='text-white text-center text-[13px] md:text-[15px]'>Design and Developed by Muhammd Mujtaba.</p>
        <p className='text-white text-center text-[13px] md:text-[15px]'>Build with <span className='text-[#4E9FE5]'>React.js</span> & <span className='text-[#4E9FE5]'>Tailwind css</span>. Hosted on <span className='text-[#4E9FE5]'>Vercel</span></p>
    </div>
    </>
  )
}

export default Footer