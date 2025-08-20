import { Link } from "react-router-dom"

function Success()
{
    return(
        <div className="bg-gradient-to-l from-[#598bfe] via-[#3b82f6] to-[#4f46e5] h-screen flex flex-col justify-center items-center">
            <div className="bg-white w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25%] rounded-md text-center p-5 shadow-md shadow-black">
                <h1 className="text-5xl mb-4">🎉</h1>
                <h1 className="text-3xl mb-4 text-blue-700">Login Successfull</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">You have login successfull Welcome to the login page.</p>
                <Link to="/" className="bg-blue-500 p-2 px-5 rounded text-white text-xl">Back to Login</Link>
            </div>
        </div>
    )
}

export default Success