import React, { useEffect, useState } from 'react'

const LoadingScreen = ({oncomplete}) => {
    // and also text should have a type write effect
    // js taking each letter like i we iterating over each word and increasing
    // the leng
    const [text,SetText] = useState("");
    const fullText = "<hello world/>";

   

    // will use useEffect as it should start on first render 
    useEffect(() => {
        let index = 0;
        const Interval = setInterval(() => {
            SetText(fullText.substring(0,index));
            index++;
            
            // if full text displayed clear it 
        if(index > fullText.length){
            clearInterval(Interval);
            // here the loading will complete so call here a settimeout after 1000 sec set the loaded to true i mean oncomplete is called 
            setTimeout(() => {
                oncomplete();
            }, 1000);
        }

        }, 100);

        

        // cleanup function 
        return () => {
          clearInterval(Interval);
        };
        // without oncomplete it will run normally
        // but rules of react if something comes out the props should be used 
        // in dependency array for sync purposes 
    }, [oncomplete]);

  return (
    // main div section which decides the width and height and type of positioning  and flex and all make it center as it got a text and a loading 
    // bar down so flex-col 
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center ">
     
      {/* text + last | wil blink animation  */}
      <div className="mb-4 text-4xl font-mono  font-bold  "> 
        {/* here i did added the blink animation too  */}
        {text}<span
      className="animate-blink ml-1">
        |
      </span>

         </div>

      {/* loading bar  */}
      <div className="relative w-[200px] h-[2px] rounded bg-gray-800
      overflow-hidden">

        {/* inner blue bar that moves back and forth  */}
        <div className="w-[50%] h-full mx-auto bg-blue-500 animate-loading "> </div>
          </div>
      
    </div>
  )
}

export default LoadingScreen
