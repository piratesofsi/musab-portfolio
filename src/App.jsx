import { use, useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import OnekoCat from "./components/OnekoCat";




function App() {
  // using a state loading screen only shows when the text hello world 
  // is not loaded fully when loaded take a pause of 1ms then next main 
    const [isLoaded, setIsLoaded] = useState(false);



  return (
    <>
      {!isLoaded && <LoadingScreen oncomplete={() =>setIsLoaded(true)}/> }
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded?"opacity-100" : "opacity-0"} bg-black text-gray-100`}
        >

              {/* Pixel Cat */}
               {/* 🐱 ONLY AFTER LOADING */}
                {isLoaded && <OnekoCat />}
          <Navbar/>
          <Home/>
          
        </div>
    </>
  )
}

export default App
