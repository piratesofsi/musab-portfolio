import React, { useState } from 'react'
import RevealOnScreen from '../RevealOnScreen'
import emailjs from "@emailjs/browser";
import github from "../../assets/github-icon.svg"; 
import linkdin from "../../assets/linkedin-icon.svg"; 
import x from "../../assets/x-icon.svg"; 
import toast from "react-hot-toast";



const Contact = () => {

    // define a usestate so i can disable the submit 
    // while sending 
    const [isSending,setisSending] = useState(false);


    // function for handling the submit of form means sending email 
    const sendEmail = (e) => {

        // disable the button
        setisSending(true);




        // prevents the default behaviour of the forms 
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE,
            import.meta.env.VITE_EMAIL_TEMPLATE,
            e.target,
            import.meta.env.VITE_EMAIL_PUBLIC
        ).then(()=>{
           toast.success("Message sent successfully ");


            // clear all inputes
            
        // clear all inputs
        e.target.reset();

        })
        .catch((err)=>{
            console.log(err);
              toast.error("Oops! Something went wrong 😭");
        })
        .finally(()=>{
            // enable the button 
            setisSending(false);
        })

    }


    return (

        
            <section id='Contact'
                className='min-h-[calc(100svh-4rem)] pt-2 flex flex-col justify-center items-center md:mt-0 -mt-12 '>

                {/* main content form 
         */}
         <RevealOnScreen>
                <div className='px-4 md:w-150 mx-auto  py-10  '>
                    <h1 className='md:text-3xl  text-2xl font-bold light:from-purple-600 light:to-pink-500 font-mono text-center mb-5 bg-gradient-to-r bg-clip-text from-blue-500 
            to-cyan-400 text-transparent  '>Get In Touch</h1>

            {/* form  */}
                    <form onSubmit={sendEmail} className='space-y-6'>
                        {/* for name input  */}
                        <div className='relative'>
                            <input type="text"
                                id='name'
                                name='name'
                                required
                                placeholder='Name...'
                                className='w-full bg-white/5 border
                     light:placeholder-blue-800 border-white/5 light:bg-blue-600/5 light:border-gray-500 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5  light:focus:border-blue-800 '
                            />
                        </div>

                        {/* for email input  */}
                        <div className='relative'>
                            <input type="email"
                                id='email'
                                name='email'
                                required
                                placeholder='Email...'
                                className='w-full
                     light:placeholder-blue-800  bg-white/5 border border-white/5 light:bg-blue-600/5 light:border-gray-500 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5  light:focus:border-blue-800 '
                            />
                        </div>

                        {/* for message field  input  */}
                        <div className='relative'>
                            <textarea
                                id='message'
                                name='message'
                                required
                                placeholder='Enter your message...'
                                rows={5}
                                className='w-full resize-none bg-white/5 border
                    
                    light:placeholder-blue-800 border-white/5 light:bg-blue-600/5 light:border-gray-500 rounded px-4 py-3  dark:text-white 
                    light:text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5  light:focus:border-blue-800 
                    placeholder:opacity-100 '
                            />
                        </div>

                        {/* submit button  */}
                        <button
                            type="submit"
                            disabled={isSending}
                            className='w-full text-white light:text-black py-3 px-6  
                rounded font-medium md:transition bg-blue-500 light:bg-blue-400 hover:bg-blue-700 light:hover:bg-blue-500 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] light:hover:shadow-[0_0_12px_rgba(37,99,235,0.25)] transition-transform duration-150 active:scale-95
disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100

' >
                              {isSending ? "Sending..." : "Submit"}
                              

                        </button>

                        
    <div className='flex  w-full justify-center gap-2  '>

                    

                    {/* for desktop  */}

                    {/* contact icons  */}
                    <div className=' md:flex justify-center items-center gap-3 hidden '>
                      <a href="https://github.com/piratesofsi"><img src={github} alt=""  className=''/></a>  
                      <a href="https://www.linkedin.com/in/musab-shaikh-16a58128a/"><img src={linkdin} alt="" /></a>  
                      <a href="https://x.com/musabshaikh242"><img src={x} alt="" width="22px" /></a>  
                       
                    </div>

                    {/* for mobile  */}

                    <div className='md:hidden flex justify-center items-center gap-4 text-[12px] light:text-gray-700 text-gray-400'>
                      <a href="https://github.com/piratesofsi"><img src={github} alt=""  className='' width="26px" /></a>  
                      <a href="https://www.linkedin.com/in/musab-shaikh-16a58128a/"><img src={linkdin} alt="" width="24px" /></a>  
                      <a href="https://x.com/musabshaikh242"><img src={x} alt="" width="18px" /></a>  
                    </div>
    </div>
               

                    </form>
                    


                </div>
                </RevealOnScreen>

                {/* footer contact  */}

                <div className='w-full md:h-4  pt-3  md:pt-3 md:py-0 px-2 gap-2  py-0
mt-0    flex-col items-center 
 '>

    {/* copyright  */}
    <div className='flex w-full justify-start max-w-50%'>
        <p className="md:mt-2 md:py-1 py-3  text-center md:text-[12px] text-[9px] text-white/40  leading-relaxed light:text-gray-700">
  © {new Date().getFullYear()} Musab Shaikh. All rights reserved.
</p>


    </div>
    

                    

                </div>

            </section>

        
    )
}

export default Contact
