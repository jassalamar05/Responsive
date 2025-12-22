export default function Navbar(){

    const nav=document.getElementById("navmenu")
    function handleSubmit(){
    nav.classList.toggle("hidden")
    }
    return(
        <>
        <nav className="flex items-center justify-between p-2">
            {/* logo */}
            <div className=" flex items-center">
                <img src="src/assets/Images/todesktop-logo.bn2Qe8sb.avif" alt="" className="max-h-12" />
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
                    <i class="fa-solid fa-list"></i>
            </button>
         </div>

        {/* dropdown of hamburg item kaisa banega  */}
        <div className=" hidden fixed inset-0 p-2 bg-white md:hidden z-10" id="navmenu">
            <div className="flex items-center justify-between" >

                {/* logo */}
            <div className=" flex items-center">
                <img src="src/assets/Images/todesktop-logo.bn2Qe8sb.avif" alt="" className="max-h-12" />
                <p className="text-xl font-bold">To Dekstop</p>
            </div>

            {/* cross hamburg */}
             <button onClick={handleSubmit}>
                     <i class="fa-solid fa-xmark"></i>
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

        </nav>
        
        
        
        </>
    )
}