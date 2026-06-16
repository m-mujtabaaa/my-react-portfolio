import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { ReactTyped } from 'react-typed'

function About() {
  
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <>
        <div className='w-[88%] pt-[18vh] md:pt-[25vh] mx-auto static md:flex gap-10 h-max mb-10'
        data-aos="fade-up">
          <div className='md:w-[50%]'>
            <h2 className='text-white font-bold text-[40px]'>About</h2>
            <p className='text-[#b8b8b8ff] w-full mb-10 pt-3 font-medium'>Hey! I'm Muhammad Mujtaba, I am a Front-End Website Developer with a strong passion for building modern and responsive web applications. I enjoy turning ideas into real, functional websites that are both visually appealing and user-friendly.<br /> <br />
             I have completed my Diploma in Web Development and have a solid understanding of HTML, CSS, Tailwind CSS, and React. I have also built several small projects that helped me improve my coding and problem-solving skills, and I am confident in creating clean and interactive websites.<br /><br />
            Currently, I am looking for an internship opportunity where I can further develop my skills and gain real-world experience. I have recently given my intermediate board exams, and I am fully focused on growing myself as a professional developer in the tech industry. </p>
          </div>
          <div className='md:w-[50%] my-auto'>
            <img className='w-[320px] h-[320px] mx-auto md:mx-auto rounded-[50%]' src='mujtaba.jpg' />
          </div>
        </div>
    </>
  )
}

export default About