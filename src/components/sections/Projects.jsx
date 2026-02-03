import React from 'react'
import github from "../../assets/github.png"; 
import github2 from "../../assets/logo.png"; 

const Projects = () => {


  return (
    <section id="Projects" className="md:min-h-[calc(100svh-4rem)]   relative
    flex flex-col justify-center items-center
    md:mt-7  ">

        {/* main context box  */}
        <div className="md:max-w-[1080px] flex flex-col justify-center items-center py-20 mx-auto">


            {/* heading  */}
        <h1 className="md:text-3xl  text-2xl font-bold light:from-purple-600 light:to-pink-500 font-mono text-center mb-5 bg-gradient-to-r bg-clip-text from-blue-500 
            to-cyan-400 text-transparent ">Featured Projects</h1>

            {/* grid of 2 for desktop and for phone only 1 grid  */}
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-7 ">
                {/* project card 1  */}
                <div className=" md:w-[350px] w-[300px] border  dark:border-gray-800 md:py-5 md:px-7 light:border-gray-800
                 rounded-xl hover:-translate-y-2 duration-200 transition-all
                 hover:shadow-[0_8px_28px_rgba(59,130,246,0.22)]
                 cursor-pointer px-5 py-5">
                    {/* heading  */}
                    <h3 className='font-bold md:text-[15px] pb-2 light:text-black dark:text-white md:text-start text-center '>Leetstats Web App </h3>
                    {/* para  */}
                    <p className="dark:text-gray-300 light:text-gray-900 md:text-[12px] pb-4 text-[12px] ">A sleek dashboard that visualizes your LeetCode performance by tracking solves, streaks, ranks, and progress in one powerful view.</p>

                    {/* tech stack used  */}
                    {["Html" , "Css" , "Javascript" , "Api"].map((tech,key)=>(
                        <span key={key}
                        className=" md:text-[14px] text-[12px] dark:bg-blue-500/10 
                        dark:text-blue-600 light:text-gray-800 light:bg-gray-300 rounded-full px-3 py-1"
                        
                        >{tech}</span>
                    ))}


                        {/* demo + view github */}
                    <div className='flex justify-start md:px-3 items-center gap-2 pt-2 md:text-[14px] text-[12px] dark:text-blue-600 light:text-gray-800 pl-2'>
                    <a href="https://leetcode-stats-ten.vercel.app/"><div>Demo</div></a> <div> | </div>  <a href="https://github.com/piratesofsi/leetcode-stats" className='flex  justify-center items-center gap-2'><img src={github2} alt="" width="22px" /> <span>Github</span></a>
                    </div>
                </div>

                {/* project card 2  */}

                 
                <div className=" md:w-[350px] w-[300px] border  dark:border-gray-800 md:py-5 md:px-7 light:border-gray-800
                 rounded-xl hover:-translate-y-2 duration-200 transition-all
                 hover:shadow-[0_8px_28px_rgba(59,130,246,0.22)]
                 cursor-pointer px-5 py-5">
                    {/* heading  */}
                    <h3 className='font-bold md:text-[15px] pb-2 light:text-black dark:text-white md:text-start text-center '>VS Code UI Clone </h3>
                    {/* para  */}
                    <p className="dark:text-gray-300 light:text-gray-900 md:text-[12px] pb-4 text-[12px] ">A frontend clone of Visual Studio Code’s interface featuring sidebar navigation, tabs, file explorer layouts, and responsive theming.</p>

                    {/* tech stack used  */}
                    {["Html" , "Tailwind" , "Javascript" , "Api"].map((tech,key)=>(
                        <span key={key}
                        className=" md:text-[14px] text-[12px] dark:bg-blue-500/10 
                        dark:text-blue-600 light:text-gray-800 light:bg-gray-300 rounded-full px-3 py-1"
                        
                        >{tech}</span>
                    ))}


                        {/* demo + view github */}
                    <div className='flex justify-start md:px-3 items-center gap-2 pt-2 md:text-[14px] text-[12px] dark:text-blue-600 light:text-gray-800 pl-2'>
                    <a href="https://vs-code-clone-gilt.vercel.app/"><div>Demo</div></a> <div> | </div>  <a href="https://github.com/piratesofsi/vs-code-clone" className='flex  justify-center items-center gap-2'><img src={github2} alt="" width="22px" /> <span>Github</span></a>
                    </div>
                </div>

                {/* project card 3  */}

                 <div className=" md:w-[350px] w-[300px] border  dark:border-gray-800 md:py-5 md:px-7 light:border-gray-800
                 rounded-xl hover:-translate-y-2 duration-200 transition-all
                 hover:shadow-[0_8px_28px_rgba(59,130,246,0.22)]
                 cursor-pointer px-5 py-5 ">
                    {/* heading  */}
                    <h3 className='font-bold md:text-[15px] pb-2 light:text-black dark:text-white md:text-start text-center '>Razorpay UI Clone </h3>
                    {/* para  */}
                    <p className="dark:text-gray-300 light:text-gray-900 md:text-[12px] pb-4 text-[12px] ">A pixel-perfect frontend recreation of Razorpay’s website with responsive layouts, modern animations, and Tailwind-powered components.</p>

                    {/* tech stack used  */}
                    {["Html" , "Tailwind" , "Javascript" , "Api"].map((tech,key)=>(
                        <span key={key}
                        className=" md:text-[14px] text-[12px] dark:bg-blue-500/10 
                        dark:text-blue-600 light:text-gray-800 light:bg-gray-300 rounded-full px-3 py-1"
                        
                        >{tech}</span>
                    ))}


                        {/* demo + view github */}
                    <div className='flex justify-start md:px-3 items-center gap-2 pt-2 md:text-[14px] text-[12px] dark:text-blue-600 light:text-gray-800 pl-2'>
                    <a href="https://github.com/piratesofsi/razorpay-clone"><div>Demo</div></a> <div> | </div>  <a href="https://razorpay-clone-nu-gilt.vercel.app/" className='flex  justify-center items-center gap-2'><img src={github2} alt="" width="22px" /> <span>Github</span></a>
                    </div>
                </div>

                {/* project card 4  */}


              <div className=" md:w-[350px] w-[300px] border  dark:border-gray-800 md:py-5 md:px-7 light:border-gray-800
                 rounded-xl hover:-translate-y-2 duration-200 transition-all
                 hover:shadow-[0_8px_28px_rgba(59,130,246,0.22)]
                 cursor-pointer px-5 py-5">
                    {/* heading  */}
                    <h3 className='font-bold md:text-[15px] pb-2 light:text-black dark:text-white  text-center md:text-start '>Zerodha Landing Page Clone </h3>
                    {/* para  */}
                    <p className="dark:text-gray-300 light:text-gray-900 md:text-[12px] pb-4 text-[12px] ">A clean, responsive recreation of Zerodha’s landing page focusing on typography, layout systems, and fintech-style UI polish.</p>

                    {/* tech stack used  */}
                    {["Html" , "Css" , "Javascript" , "Api"].map((tech,key)=>(
                        <span key={key}
                        className=" md:text-[14px] text-[12px] dark:bg-blue-500/10 
                        dark:text-blue-600 light:text-gray-800 light:bg-gray-300 rounded-full px-3 py-1"
                        
                        >{tech}</span>
                    ))}


                        {/* demo + view github */}
                    <div className='flex justify-start md:px-3 items-center gap-2 pt-2 md:text-[14px] text-[12px] dark:text-blue-600 light:text-gray-800 pl-2'>
                    <a href=" https://piratesofsi.github.io/zerodha-landing-page/"><div>Demo</div></a> <div> | </div>  <a href="https://github.com/piratesofsi/zerodha-landing-page" className='flex  justify-center items-center gap-2'><img src={github2} alt="" width="22px" /> <span>Github</span></a>
                    </div>
                </div>




            </div>


        </div>
      
    </section>
  )
}

export default Projects
