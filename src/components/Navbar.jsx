import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full
    bg-[rgba(10,10,10,0.8)] z-50 backdrop-blur-lg border-b
    border-white/10">
        {/* context nav bar  */}
     <div className="max-w-5xl  mx-auto p-4 ">
      <div className="flex justify-between items-center h-7">

      {/* logo  */}


      <a href="#home" className="font-mono font-bold">
        Musab<span className="text-blue-500  ">.dev</span>

      </a>

      {/* for mobile a hamburger icon  */}
      <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"> 
        &#9776;

      </div>

      {/* for desktop we got all the nav links  */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="hover:text-blue-500 duration-200">Home</a>
        <a href="#home" className="hover:text-blue-500 duration-200">Skills</a>
        <a href="#home" className="hover:text-blue-500 duration-200">About </a>
        <a href="#home" className="hover:text-blue-500 duration-200">Contact me</a>
      </div>



      </div>
     </div>
    </nav>
  )
}

export default Navbar
