import React from 'react'
import html from "../../assets/html.png";
import css from "../../assets/css-3.png";
import react from "../../assets/atom.png";
import js from "../../assets/js.png";
import java from "../../assets/java.png";
import tailwind from "../../assets/tailwindcss.svg";
import nodejs from "../../assets/nodejs.png";
import sql from "../../assets/sql.png";

const About = () => {
    return (
        <section id='About' className="min-h-[calc(100svh-4rem)] relative mt-14
        md:mt-1
    light:bg-white bg-black py-20">
            {/* content box  */}

            <div className="md:max-w-[1080px] max-w-[400px] mx-auto flex flex-col justify-center items-center  ">
                {/* text - About me  */}
                <h2 className="text-3xl font-bold light:from-purple-600 light:to-pink-500 font-mono text-center mb-8 bg-gradient-to-r bg-clip-text from-blue-500 
            to-cyan-400 text-transparent ">About Me</h2>
                {/* main text box after about me  */}
                <div className="border border-gray-900 px-10 max-w-[300px] md:max-w-[681px] py-1 pb-7 rounded-xl flex flex-col gap-3 hover:-translate-y-2 transition-all duration-200  shadow-md light:light:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
">
                    <h2 className="mt-5  text-gray-400 md:max-w-[600px]  max-w-[300px] light:text-gray-700 md:text-[15px] text-[12px] pb-2 ">Passionate developer with expertise in building scalable web applications and
                        creating innovative solutions.</h2>
                    {/* inner content div  */}
                    <div className=" flex md:flex-row flex-col justify-between md:gap-5 md:pl-24 md:pr-24 md:pt-6   gap-9 ">
                        {/* frontend  */}
                        <div className="flex flex-col items-center ">
                            <h1 className="md:text-3xl text-[19px] font-mono text-white light:text-gray-800 font-bold pb-5 ">Frontend</h1>

                            {/* grid for the skills  */}
                            <div className="  grid  grid-cols-3 md:gap-3 items-center justify-center  gap-4">
                                 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"  className="md:w-9 md:h-9  w-7  h-7  flex  items-center justify-center ">
                                <img src={html} alt="html" width="50px" height="40px"
                                   className="max-w-full max-h-full object-contain" />
                                </a>

                                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"  className="md:w-9 md:h-9  w-7  h-7  flex items-center justify-center">
                                <img src={css} alt="css" 
                                   className="max-w-full max-h-full object-contain" />
                                </a>

                                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"  className="md:w-9 md:h-9  w-7  h-7  flex items-center justify-center">
                                <img src={js} alt="javascript" 
                                   className="max-w-full max-h-full object-contain" />
                                </a>

                                  <a href="https://react.dev/"  className="md:w-9 md:h-9  w-7  h-7  flex items-center justify-center">
                                <img src={react} alt="react" 
                                   className="max-w-full max-h-full object-contain" />
                                </a>
                                
                        

                                    <a href="https://docs.oracle.com/en/java/"  className="md:w-9 md:h-9  w-7  h-7 flex items-center justify-center">
                                <img src={java} alt="java" 
                                   className="max-w-full max-h-full object-contain"/>
                                </a>

                                    <a href="https://tailwindcss.com/docs/installation/using-vite"  className="md:w-9 md:h-9  w-7  h-7  flex items-center justify-center">
                                <img src={tailwind} alt="tailwindcss"    className="max-w-full max-h-full object-contain" />
                                </a>
                            
                            </div>
                           
                            

                        </div>
                        {/* backend  */}
                          <div className="flex md:flex-row flex-col justify-between md:gap-5 md:pl-24 md:pr-24 md:pt-6  items-center gap-9 ">
                            <h1 className="md:text-3xl text-[19px] font-mono text-white light:text-gray-800 font-bold pb-5 text-center">Backend</h1>

                            {/* grid for the skills  */}
                            <div className="grid  grid-cols-2 items-center justify-center  gap-4 ">
                                 <a href="https://nodejs.org/api/all.html"  className="md:w-9 md:h-9  w-7  h-7   flex items-center justify-center">
                                <img src={nodejs} alt="node js " width="50px" height="40px"
                                   className="max-w-full max-h-full object-contain" />
                                </a>

                                  <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL"  className="md:w-9 md:h-9  w-7  h-7 flex items-center justify-center">
                                <img src={sql} alt="sql" 
                                   className="max-w-full max-h-full object-contain" />
                                </a>

                                  {/* <a href=""  className="w-9 h-9 flex items-center justify-center">
                                <img src={js} alt="html" 
                                   className="max-w-full max-h-full object-contain" />
                                </a>

                                  <a href=""  className="w-9 h-9 flex items-center justify-center">
                                <img src={react} alt="html" 
                                   className="max-w-full max-h-full object-contain" />
                                </a>
                                
                        

                                    <a href=""  className="w-9 h-9 flex items-center justify-center">
                                <img src={java} alt="html" 
                                   className="max-w-full max-h-full object-contain"/>
                                </a>

                                    <a href=""  className="w-9 h-9 flex items-center justify-center">
                                <img src={tailwind} alt="html"    className="max-w-full max-h-full object-contain" />
                                </a>
                             */}
                            </div>
                           
                            

                        </div>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default About
