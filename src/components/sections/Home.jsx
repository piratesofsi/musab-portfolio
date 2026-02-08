import React, { useEffect, useState } from "react";
import myImg from "../../assets/myImg.png"; // adjust path
import myImg2 from "../../assets/myImg2.png"; // adjust path
import RevealOnScreen from "../RevealOnScreen";

const Home = () => {
  const texts = ["I'm Musab", "I'm a MERN Developer", "I'm a Web Developer"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timeout;

    if (!isDeleting && subIndex < currentText.length) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
      }, 100);
    } else if (isDeleting && subIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
      }, 60);
    } else if (!isDeleting && subIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (<RevealOnScreen>
    <section
      id="home"
      className=" min-h-[calc(100svh-4rem)]  pt-24 md:pt-20 z-50 light:bg-white  md:max-w-[1600px] md:mx-auto  md:mt-7 flex flex-col-reverse md:flex-row items-center gap-14 justify-start px-10 md:px-20 
"
    >

      {/* reveal on screen component  */}
      


      {/* LEFT TEXT */}
      <div className="md:w-1/2 w-full flex flex-col justify-center flex-shrink-0 
      h-[5.5rem] md:h-[4.5rem]">
        <h1 className="text-4xl md:text-6xl font-bold light:text-black">
          Hi,{" "}

        </h1>
        <span className="text-blue-500 text-4xl md:text-6xl font-bold pr-2 inline-block md:whitespace-nowrap wrap-break-word whitespace-normal  max-w-full">
          {text}< span className="text-white animate-pulse">|</span>
        </span>

        <p className="mt-6 text-gray-400 max-w-md light:text-gray-700">
          I build clean, scalable web apps with React, Node, and modern UI.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 w-full flex flex-col items-center gap-8 mb-10 mt-3 md:mb-0">
        <img
          src={myImg2}
          alt="Musab Illustration"
          className="w-[230px] md:w-[340px] rounded-2xl shadow-xl hover:scale-105 transition duration-300
"
        />
        {/* cta buttons  */}
        <div className=" inline-flex  flex-col gap-4 md:flex-row justify-between items-center md:w-[380px] pl-4 pr-4 ">
          <a href="#Projects"  className=" inline-flex  justify-center items-center px-3 py-2 md:px-7 md:py-3  md:w-[200px] w-[154px]  text-[16px]
 bg-blue-600 hover:bg-blue-700 md:transition rounded-xl text-white cursor-pointer font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-150
">
            View Projects
          </a>

          <a className="inline-flex justify-center items-center  px-3 py-3 md:px-6 md:py-3  md:w-[200px] w-[154px] font-bold text-[14px] md:text-[13px]
 border border-blue-500 cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-white md:transition rounded-xl font-semibold active:scale-95 transition-transform duration-150
">
            Downoad Resume
          </a>
        </div>
      </div>

      


    </section>
    </RevealOnScreen>
  );
};

export default Home;
