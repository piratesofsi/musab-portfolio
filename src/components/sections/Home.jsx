import React, { useEffect, useState } from "react";
import myImg from "../../assets/myImg.png"; // adjust path

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

  return (
    <section
      id="home"
      className="min-h-screen md:max-w-[1600px] md:mx-auto mt-20 md:mt-7 flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-24"
    >
      {/* LEFT TEXT */}
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi,{" "}
          
        </h1>
        <span className="text-blue-500 text-4xl md:text-6xl font-bold  pr-2">
            {text}< span className="text-white animate-pulse">|</span>
          </span>

        <p className="mt-6 text-gray-400 max-w-md">
          I build clean, scalable web apps with React, Node, and modern UI.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 w-full flex flex-col items-center gap-8 mb-10 md:mb-0">
        <img
          src={myImg}
          alt="Musab Illustration"
          className="w-[260px] md:w-[380px] rounded-2xl shadow-xl"
        />
        {/* cta buttons  */}
        <div className="flex justify-between w-[380px] pl-4 pr-4 ">
             <button className="px-6 py-3 md:px-8 md:py-4
 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-white cursor-pointer font-semibold shadow-lg hover:scale-105">
    View Projects
  </button>

  <button className="px-6 py-3 md:px-8 md:py-4
 border border-blue-500 cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-white transition rounded-xl font-semibold">
    Contact Me
  </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
