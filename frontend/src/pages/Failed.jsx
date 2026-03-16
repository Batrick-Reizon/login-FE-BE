import { Link } from "react-router-dom"

function Failed() {
    return (<div className="bg-gradient-to-br from-red-700 to-yellow-300 h-screen flex flex-col justify-center items-center">
        <div className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/4 p-5 rounded bg-white shadow-lg text-center">
            <h2 className="text-4xl">😔</h2>
            <h1 className="my-3 text-blue-700 font-bold text-2xl">Login Failed</h1>
            <p className="text-base md:text-lg">Oops username or password inccorrect please try again</p>
            <Link to={"/"} className="inline-block mt-3 bg-red-500 text-white py-2 px-5 rounded">Try Again</Link>
        </div>
    </div>)
}

export default Failed