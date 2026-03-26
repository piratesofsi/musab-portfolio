import React from 'react'
import github from "../../assets/github.png";
import github2 from "../../assets/logo.png";
import RevealOnScreen from '../RevealOnScreen';
import ProjectCard from './ProjectCard';

const Projects = () => {


    return (
 
        <section id="Projects" className="md:min-h-[calc(100svh-4rem)]   relative
    flex flex-col justify-center items-center
    md:mt-7 scroll-mt-12  ">


            {/* reaveal on screen  */}


            {/* main context box  */}
            <div className="md:max-w-[1080px] flex flex-col justify-center items-center py-20 mx-auto">


                {/* heading  */}
                <RevealOnScreen>
                    <h1 className="md:text-3xl  text-2xl font-bold light:from-purple-600 light:to-pink-500 font-mono text-center mb-5 bg-gradient-to-r bg-clip-text from-blue-500 
            to-cyan-400 text-transparent ">Featured Projects</h1>

                </RevealOnScreen>

                {/* grid of 2 for desktop and for phone only 1 grid  */}
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-7 ">


                    {/* revealonscreen on each card  */}
                    <RevealOnScreen>
                        {/* project card 1  */}
                        <ProjectCard
                            title="NovaChat"
                            tagline="Real-time systems & WebSockets"
                            description="Built a real-time chat application with room-based messaging using Socket.io and MERN stack."
                            tech={["React", "Node.js", "Express", "Socket.io"]}
                            demo="https://nova-chat-wvwg.vercel.app/"
                            github="https://github.com/piratesofsi/novaChat"
                            image="/images/chat.png"
                        />
                    </RevealOnScreen>

                    {/* project card 2  */}
                    <RevealOnScreen>


                        <ProjectCard
                            title="FlowMotion"
                            tagline="Frontend animations & UI engineering"
                            description="Developed reusable UI animation components with smooth transitions using Framer Motion."
                            tech={["React", "Framer Motion", "CSS"]}
                            demo="https://flowmotion-liard.vercel.app/"
                            github="https://github.com/piratesofsi/flowmotion"
                            image="/images/flow.png"
                        />
                    </RevealOnScreen>

                    {/* project card 3  */}
                    <RevealOnScreen>

                        <ProjectCard
                            title="Markdown Notes"
                            tagline="State management & live rendering"
                            description="Created a markdown notes app with live preview, dark mode, and local storage support."
                            tech={["React", "Vite", "Tailwind", "Electron"]}
                            demo="https://markdown-notes-app-one.vercel.app/"
                            github="https://github.com/piratesofsi/markdown-notes-app"
                            image="/images/notes.png"
                        />

                    </RevealOnScreen>

                    {/* project card 4  */}

                    <RevealOnScreen>


                        <ProjectCard
                            title="Weather Dashboard"
                            tagline="API integration & async handling"
                            description="Built a weather app that fetches real-time data using APIs with a clean responsive UI."
                            tech={["React", "API", "CSS"]}
                            demo="https://weather-app-nine-pi-68.vercel.app/"
                            github="https://github.com/piratesofsi/weather-app"
                            image="/images/weather.png"
                        />
                    </RevealOnScreen>




                </div>


            </div>




        </section>

    )
}

export default Projects
