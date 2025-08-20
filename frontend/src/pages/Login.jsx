import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login()
{
    var [user,setuser] = useState("")
    var [password,setpassword] = useState("")
    const navigate = useNavigate()
    const API = process.env.REACT_APP_API_URL

    const handleuser = (event) =>
    {
        setuser(event.target.value)
    }

    const handlepassword = (event) =>
    {
        setpassword(event.target.value)
    }

    const check = () =>
    {
        var logindetails = axios.post(`${API}/login`,{"username":user,"password":password})
        logindetails.then((success) =>
        {
            console.log(success.data)

            if(success.data === true)
            {
                navigate("/success")
            }
        }).catch((err) =>
            {
                if(err.response && err.response.status === 401)
                {
                    alert("You don't have a account. Please signup")
                    navigate("/signup")
                }
                else if(err.response && err.response.status === 404)
                {
                    alert("You Entered Wrong Password")
                    navigate("/failed")
                }
            })
    }

    return(
        <div className="bg-gradient-to-r from-[#598bfe] via-[#3b82f6] to-[#4f46e5] h-screen flex flex-col justify-center items-center">
            <div className="bg-white w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25%] text-center p-5 rounded-lg shadow-md shadow-black">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 font-black mb-4">Login Page</h1>

                <input type="text" onChange={handleuser} placeholder="Username" name="username" className="border border-gray-300 p-1 w-[75%] rounded-md focus:outline-2 focus:outline-blue-500 mb-4"></input>
                <input type="password" onChange={handlepassword} placeholder="Password" name="password" className="border border-gray-300 p-1 w-[75%] focus:outline-2 rounded-md focus:outline-blue-500 mb-4"></input>

                <button onClick={check} className="bg-blue-500 p-2 w-1/3 mb-4 rounded-md text-white font-medium">Login</button>

                <h1 className="text-sm sm:text-base md:text-lg">Don't have an account? <Link to="/signup" className="text-blue-500 font-medium hover:underline hover:underline-offset-2 text-sm sm:text-base md:text-lg">Signup</Link></h1>
            </div>
        </div>
    )
}

export default Login