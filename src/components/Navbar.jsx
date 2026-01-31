import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full
    bg-[rgba(10,10,10,0.8)] z-50 backdrop-blur-lg border-b
    border-white/10" >
      {/* context nav bar  */}
      <div className="max-w-5xl  mx-auto p-4 ">
        <div className="flex justify-between items-center h-7">

          {/* logo  */}

         
          <a href="#home" className="font-mono font-bold text-[25px] ">
            Musab<span className="text-blue-500 font-extrabold  ">.codes</span>

          </a>

          {/* for mobile a hamburger icon  */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
            &#9776;

          </div>

          {/* for desktop we got all the nav links  */}
          <div className="hidden md:flex items-center text-[19px] text-gray-500 font-bold space-x-8">
            <a href="#home" className="hover:text-blue-500 duration-200 relative group">Home
              {/* blue line below  */}
              <div className="w-0 absolute h-[2px] left-1/2 -bottom-2  bg-blue-500  transition-all ease-out duration-200 group-hover:w-full group-hover:-translate-x-1/2  "> </div>
            </a>
            <a href="#Skills" className="hover:text-blue-500 duration-200 relative group">Skills
              {/* blue line below  */}
              <div className="w-0 absolute h-[2px] left-1/2 -bottom-2  bg-blue-500  transition-all ease-out duration-200 group-hover:w-full group-hover:-translate-x-1/2 "> </div>
            </a>
            <a href="#About" className="hover:text-blue-500 duration-200 relative group">About
              {/* blue line below  */}
              <div className="w-0 absolute h-[2px] left-1/2 -bottom-2  bg-blue-500  transition-all ease-out duration-200 group-hover:w-full group-hover:-translate-x-1/2 "> </div> </a>
            <a href="#Contact me" className="hover:text-blue-500 duration-200 relative group" >Contact me
              {/* blue line below  */}
              <div className="w-0 absolute h-[2px] left-1/2 -bottom-2  bg-blue-500  transition-all ease-out duration-200 group-hover:w-full group-hover:-translate-x-1/2 "> </div>
            </a>
          </div>



        </div>
      </div>
    </nav>
  )
}

export default Navbar
