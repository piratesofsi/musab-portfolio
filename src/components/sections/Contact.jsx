import React, { useState } from 'react'
import RevealOnScreen from '../RevealOnScreen'
import emailjs from "@emailjs/browser";
import github from "../../assets/github-icon.svg";
import linkdin from "../../assets/linkedin-icon.svg";
import x from "../../assets/x-icon.svg";
import toast from "react-hot-toast";

const Contact = () => {

    const [isSending, setisSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setisSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE,
            import.meta.env.VITE_EMAIL_TEMPLATE,
            e.target,
            import.meta.env.VITE_EMAIL_PUBLIC
        )
        .then(() => {
            toast.success("Message sent successfully ");
            e.target.reset();
        })
        .catch((err) => {
            console.log(err);
            toast.error("Oops! Something went wrong 😭");
        })
        .finally(() => {
            setisSending(false);
        });
    }

    return (
        <section
            id='Contact'
            className='min-h-[calc(100svh-4rem)] flex flex-col'>

            {/* MAIN CONTENT */}
            {/* flex grow eates all the space so the footer should be at bottom  */}
            <div className="flex-grow flex items-center justify-center px-4">

                <RevealOnScreen>
                    <div className='md:w-150 w-full py-10'>
                        
                        <h1 className='md:text-3xl text-2xl font-bold font-mono text-center mb-5 
                        bg-gradient-to-r bg-clip-text from-blue-500 to-cyan-400 text-transparent 
                        light:from-purple-600 light:to-pink-500'>
                            Get In Touch
                        </h1>

                        {/* FORM */}
                        <form onSubmit={sendEmail} className='space-y-6'>

                            {/* Name */}
                            <input
                                type="text"
                                name='name'
                                required
                                placeholder='Name...'
                                className='w-full bg-white/5 border border-white/5 light:bg-blue-600/5 
                                light:border-gray-500 rounded px-4 py-3 text-white 
                                light:placeholder-blue-800 focus:outline-none focus:border-blue-500 
                                focus:bg-blue-500/5'
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name='email'
                                required
                                placeholder='Email...'
                                className='w-full bg-white/5 border border-white/5 light:bg-blue-600/5 
                                light:border-gray-500 rounded px-4 py-3 text-white 
                                light:placeholder-blue-800 focus:outline-none focus:border-blue-500 
                                focus:bg-blue-500/5'
                            />

                            {/* Message */}
                            <textarea
                                name='message'
                                required
                                placeholder='Enter your message...'
                                rows={5}
                                className='w-full resize-none bg-white/5 border border-white/5 
                                light:bg-blue-600/5 light:border-gray-500 rounded px-4 py-3 
                                text-white light:text-black light:placeholder-blue-800 
                                focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                            />

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={isSending}
                                className='w-full py-3 px-6 rounded font-medium text-white 
                                light:text-black bg-blue-500 light:bg-blue-400 
                                hover:bg-blue-700 light:hover:bg-blue-500 
                                transition-transform duration-150 hover:-translate-y-0.5 
                                active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed'>
                                
                                {isSending ? "Sending..." : "Submit"}
                            </button>

                            {/* Social Icons */}
                            <div className='flex justify-center gap-4 mt-4'>
                                <a href="https://github.com/piratesofsi">
                                    <img src={github} alt="github" width="26px" />
                                </a>
                                <a href="https://www.linkedin.com/in/musab-shaikh-16a58128a/">
                                    <img src={linkdin} alt="linkedin" width="24px" />
                                </a>
                                <a href="https://x.com/musabshaikh242">
                                    <img src={x} alt="x" width="20px" />
                                </a>
                            </div>

                        </form>
                    </div>
                </RevealOnScreen>
            </div>

            {/* FOOTER */}
            <footer className='w-full bg-black py-3 flex justify-center'>
                <p className="text-[9px] md:text-[12px] text-white/40 text-center light:text-gray-700">
                    © {new Date().getFullYear()} Musab Shaikh. All rights reserved.
                </p>
            </footer>

        </section>
    )
}

export default Contact;