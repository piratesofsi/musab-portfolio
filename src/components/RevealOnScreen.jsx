import React, { useEffect, useRef, useState } from 'react'

// pass the props means the section you want to animate 
// and reference stores that section with opacity zero 
// when the observer sees that you hit the viewport where
// the section is there so it js reveals it animations 
// passing the props as children
const RevealOnScreen = ({ children }) => {


    // using reference hook 
    const ref = useRef(null);

    // and on mobile js use it for first time then remove 
        // it 
        // and we want that on phone should runs only once 
        // and on desktop it should keep running 
    

        const [isMobile,setisMobile]=useState(window.innerWidth<768);

        useEffect(() => {
            // changes the value if the screen size changes 
            const handleResize = ()=>{
                setisMobile(window.innerWidth<768);
            }

            // add eventlistener which checks the innerwidth
            window.addEventListener("resize",handleResize);

            // cleanup
            return () => {
              window.removeEventListener("resize",handleResize);
            };
        }, []);

   

    useEffect(() => {
        // observer keep observing the section 
        // if it comes in the viewport which got a threshold of 0.2 means slighty visible then js show it and with
        // visible animation and 

        // and on mobile js use it for first time then remove 
        // it 
        // and we want that on phone should runs only once 
        // and on desktop it should keep running 
    


        const observer = new IntersectionObserver(

            ([entry]) => {

                if (!ref.current) return;

                if (entry.isIntersecting) {
                    ref.current.classList.add("visible");

                    if (isMobile) {
                        observer.unobserve(ref.current); 
                    }
                } else if (!isMobile) {
                   
                    ref.current.classList.remove("visible");
                }

            }
            ,
            { threshold: 0.3, rootMargin: "0px  0px  -80px  0px " });

        if (ref.current) observer.observe(ref.current);


        // clean up 
        return () => {
            observer.disconnect();
        };

    }, [isMobile]);

    return (



        <div ref={ref} className="reveal">
            {children}

        </div>
    )
}

export default RevealOnScreen
