import { useState } from "react"
import icon from "../assets/Images/todesktop-logo.bn2Qe8sb.avif";

export default function Navbar(){
    //false -- menu band  // true -- menu open

    const[isOpen,setIsOpen]=useState(false)
    const handleSubmit=()=>{
        setIsOpen(!isOpen)
    }

    
    return(
        <>
        <nav className="flex items-center justify-between p-2">
            {/* logo */}
            <div className=" flex items-center">
                <img src={icon} alt="" className="max-h-12" />
                <p className="text-xl font-bold">To Dekstop</p>
            </div>

            <div className="hidden gap-10 md:flex ">
                <a href="" className="hover:text-sky-500 hover:scale-110 transition-transform duration-500">Home</a>
                <a href="" className="hover:text-sky-500 hover:scale-110 transition-transform duration-500">About</a>
                <a href="" className="hover:text-sky-500 hover:scale-110 transition-transform duration-500">Contact</a>
                <a href="" className="hover:text-sky-500 hover:scale-110 transition-transform duration-500">Location</a>
                <a href="" className="hover:text-sky-500 hover:scale-110 transition-transform duration-500">Help</a>
            </div>
        {/* electron button */}
            <div className="hidden md:block">
                <button className="border-2 p-2 hover:border-sky-600">
                    Electron Developer
                </button>
            </div>
   
         <div className="block md:hidden">
            <button onClick={handleSubmit}>
                    <i className="fa-solid fa-list"></i>
            </button>
         </div>

        {/* dropdown of hamburg item kaisa banega  */}

        {isOpen && (
        <div className=" fixed inset-0 p-2 bg-white md:hidden z-10">
            <div className="flex items-center justify-between" >

                {/* logo */}
            <div className=" flex items-center">

                <img src={icon} alt="" className="max-h-12" />
                <p className="text-xl font-bold">To Dekstop</p>
            </div>

            {/* cross hamburg */}
             <button onClick={handleSubmit}>
                     <i className="fa-solid fa-xmark"></i>
            </button>
            </div>
            <div className="block gap-10 md:hidden mt-6 p-4">
                <a href="" className="hover:text-sky-500 hover:shadow-lg block p-2">Home</a>
                <a href="" className="hover:text-sky-500 hover:shadow-lg block p-2">About</a>
                <a href="" className="hover:text-sky-500 hover:shadow-lg block p-2">Contact</a>
                <a href="" className="hover:text-sky-500 hover:shadow-lg block p-2">Location</a>
                <a href="" className="hover:text-sky-500 hover:shadow-lg block p-2">Help</a>
            </div>

        </div>
        )}

        </nav>

        {/* text area */}
        <main>
            <div className="flex items-center justify-start mt-10 md:justify-center lg:justify-center ">
                <button className="bg-yellow-100 p-1 px-1 text-orange-400 flex items-center justify-center gap-2 hover:text-red-500">
                 <i className="fa-solid fa-circle-dot text-sm text-orange-600"></i>
                   v0.35.0<i className="fa-solid fa-arrow-right p-1 hover:translate-x-2 transition-transform duration-500"></i>
                   </button>
            </div>


            <div>
                <h1 className="text-2xl mt-5 md:text-4xl lg:text-7xl md:text-center lg:text-center font-bold">Web app to <span className="text-blue-600"> desktop</span> <br />app in minutes</h1>
            </div>

            <div>
                <h1 className="text-xl sm:text-nowrap md:text-4xl lg:text-6xl mt-20 lg:text-center font-semibold md:text-center ">Take Your Webpage To Next Level with <br /> TO DESKTOP</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-10 mt-20 gap-2 transition-transform ">
                <button className=" = border-2 px-2 py-3 rounded-lg font-bold bg-blue-600 hover:shadow-xl duration-300">Download</button>
                <button className="border-2 px-2 py-3 rounded-lg bg-gray-300 hover:shadow-xl duration-300">Docks</button>
            </div>
        </main>
        
        
        
        </>
    )
}