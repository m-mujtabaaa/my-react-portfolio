import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='w-[100vw] fixed'>
        <div className='w-[90%] mx-auto h-[77px] bg-[#01060cff] flex border-b-[1px] border-[#272727ff] items-center justify-between'>
          
          <h2 className='py-5 px-5 text-[#868686ff] text-[24px] grow font-black'>
            &lt;/<span className='text-[#ffffffff]'>Mujtaba</span>&gt;
          </h2>

          {/* Desktop Menu */}
          <ul className='hidden md:flex text-[#b8b8b8ff] font-semibold py-7 px-10 text-[15px]'>
            <li className='mx-5 duration-300 hover:text-white'><a href="#">Home</a></li>
            <li className='mx-5 duration-300 hover:text-white'><a href="#Project">Projects</a></li>
            <li className='mx-5 duration-300 hover:text-white'><a href="#Contact">Contact</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <div className='md:hidden px-5'>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#b8b8b8ff] focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#01060cff] w-full border-t border-[#272727ff]">
            <ul className="flex flex-col items-center py-4 text-[#b8b8b8ff] font-semibold space-y-3 text-[15px]">
              <li className='duration-300 hover:text-white'><a href="#">Home</a></li>
              <li className='duration-300 hover:text-white'><a href="#Project">Projects</a></li>
              <li className='duration-300 hover:text-white'><a href="#Contact">Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </>
  );
}

export default Navbar;
