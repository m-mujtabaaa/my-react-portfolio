import React from 'react'

function About() {
  return (
    <>
        <div className='w-[88%] pt-[18vh] md:pt-[25vh] mx-auto static md:flex gap-10 h-max mb-10'>
          <div className='md:w-[50%]'>
            <h2 className='text-white font-bold text-[40px]'>About</h2>
            <p className='text-[#b8b8b8ff] w-full mb-10 pt-3 font-medium'>Hey! I'm Muhammad Mujtaba, I've been close to a computer since an early age, and been passionate about it ever since. <br /> <br />I really liked to build stuff using no-code tools back in 2010, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, and had the privilege to worked in a Recruitment Companyand a SaaS CompanyI'm interested in building something awesome with code and automate tasks with code, currently focused on Web & Mobile Development,Open Sourceand Competitive Programming<br /><br /> When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball! </p>
          </div>
          <div className='md:w-[50%] my-auto'>
            <img className='w-[320px] h-[320px] mx-auto md:mx-auto rounded-[50%]' src='mujtaba.jpeg' />
          </div>
        </div>
    </>
  )
}

export default About