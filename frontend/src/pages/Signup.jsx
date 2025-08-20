import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup()
{
    var [euser,seteuser] = useState("")
    var [epassword,setpassword] = useState("")
    const navigate = useNavigate()
    const API = process.env.REACT_APP_API_URL

    const handleeuser = (event) =>
    {
        seteuser(event.target.value)
    }

    const handleepassword = (event) =>
    {
        setpassword(event.target.value)
    }

    const adduser = () =>
    {
        var signundetails = axios.post(`${API}/signup`,{"username":euser,"password":epassword})
        signundetails.then((success) =>
        {
            console.log(success.data)

            if(success.data === true)
            {
                alert("Signup Successfull")
                navigate("/")
            }
        }).catch((failed) =>
        {
            console.log("Signup failed:", failed)
        })
    }

    return(
        <div className="bg-gradient-to-l from-[#16a34a] via-[#4ade80] to-[#bbf7d0] h-screen flex flex-col justify-center items-center">
            <div className="bg-white w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25%] p-5 rounded text-center shadow-md shadow-black">
                <h1 className="text-green-500 text-3xl font-black mb-4">Signup Page</h1>

                <input type="text" name="username" onChange={handleeuser} placeholder="Username" className="border border-gray-300 w-[75%] p-1 rounded mb-4"></input>
                <input type="password" name="password" onChange={handleepassword} placeholder="password" className="border border-gray-300 w-[75%] p-1 rounded mb-4"></input>

                <button className="bg-green-500 text-white p-2 px-5 rounded mb-4" onClick={adduser}>Create Account</button>

                <h1 className="text-sm sm:text-base md:text-lg">Already have a account? <Link to="/" className="text-green-500 font-medium hover:underline hover:underline-offset-2 text-sm sm:text-base md:text-lg">Login</Link></h1>
            </div>
        </div>
    )
}

export default Signup