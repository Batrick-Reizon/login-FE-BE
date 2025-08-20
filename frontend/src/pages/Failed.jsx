import { Link } from "react-router-dom"

function Failed()
{
    return(
        <div className="bg-gradient-to-r from-[#f87171] via-[#dc2626] to-[#991b1b] h-screen flex flex-col justify-center items-center">
            <div className="bg-white w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25%] text-center rounded p-5 shadow-md shadow-black">
                <h1 className="text-5xl mb-4">😔</h1>
                <h1 className="text-red-700 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">Login Failed</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">Oops Username or Password incorrect Please try again.</p>
                <Link to="/" className="bg-red-500 p-2 px-5 rounded text-white text-sm sm:text-base md:text-lg lg:text-xl">Try Again</Link>
            </div>
        </div>
    )
}

export default Failed