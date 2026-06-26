import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {
const sections = document.querySelectorAll("[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="w-[100vw] bg-[#01060c9f] backdrop-blur-md border-b-[1px] border-[#272727ff] fixed top-0 left-0 z-45 " data-aos="fade-down">
        <div className='w-[90%] mx-auto h-[77px] z-6 flex items-center justify-between'>

          <h2 className='py-5 px-5 text-[#868686ff] text-[24px] grow font-black'>
            &lt;/<span className='text-[#ffffffff]'>Mujtaba</span>&gt;
          </h2>

          {/* Desktop Menu */}
          <ul className='hidden md:flex text-[#b8b8b8ff] font-semibold py-7 px-10 text-[15px]'>
            <li className="mx-5">
              <a
                href="#home"
                className={`duration-300 ${activeSection === "home"
                    ? "text-white"
                    : "text-[#b8b8b8ff] hover:text-white"
                  }`}
              >
                Home
              </a>
            </li>

            <li className="mx-5">
              <a
                href="#Project"
                className={`duration-300 ${activeSection === "Project"
                    ? "text-white"
                    : "text-[#b8b8b8ff] hover:text-white"
                  }`}
              >
                Projects
              </a>
            </li>

            <li className="mx-5">
              <a
                href="#Contact"
                className={`duration-300 ${activeSection === "Contact"
                    ? "text-white"
                    : "text-[#b8b8b8ff] hover:text-white"
                  }`}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className='md:hidden px-5 z-4'>
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
          <div className="md:hidden bg-[#01060cff] text-center w-full border-t border-[#272727ff]">            
          <ul className="flex flex-col p-6 gap-4 text-[#b8b8b8ff]">
             <li className="mx-5">
              <a
                href="#home"
                className={`duration-300 ${activeSection === "home"
                    ? "text-white"
                    : "text-[#b8b8b8ff] hover:text-white"
                  }`}
              >
                Home
              </a>
            </li>

            <li className="mx-5">
              <a
                href="#Project"
                className={`duration-300 ${activeSection === "Project"
                    ? "text-white"
                    : "text-[#b8b8b8ff] hover:text-white"
                  }`}
              >
                Projects
              </a>
            </li>

            <li className="mx-5">
              <a
                href="#Contact"
                className={`duration-300 ${activeSection === "Contact"
                    ? "text-white"
                    : "text-[#b8b8b8ff] hover:text-white"
                  }`}
              >
                Contact
              </a>
            </li>
          </ul>
          </div>
        )}


      </div>
    </>
  );
}

export default Navbar;
