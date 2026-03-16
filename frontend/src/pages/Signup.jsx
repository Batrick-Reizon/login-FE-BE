import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup() {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    const API = import.meta.env.VITE_APP_API_URL

    const handleUser = (event) => {
        setUser(event.target.value)
    }
    const handlePass = (event) => {
        setPass(event.target.value)
    }
    const handleCheck = () => {
        const signupdetails = axios.post(`${API}/signup`, { username: user, password: pass })
        signupdetails.then((success) => {
            console.log(success)
            if (success.data === true) {
                setMessage("Account created successfully!")
                setTimeout(() => {
                    navigate("/")
                }, 1000)
            }
        }).catch((error) => {
            setTimeout(() => {
                setMessage("Failed to create account")
            })
        })
    }

    return (<div className="bg-gradient-to-br from-blue-700 to-yellow-300 h-screen flex flex-col justify-center items-center">
        <div className="bg-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/4 p-5 text-center rounded shadow-xl">
            <h1 className="text-2xl font-bold">Signup Page</h1>
            {message && <p className="fixed top-5 right-5 bg-green-500 text-white px-5 py-2 rounded shadow-lg">{message}</p>}
            <input type="email" onChange={handleUser} name="username" placeholder="Enter username" required className="w-10/12 border border-gray-500 p-1 rounded my-3" />
            <input type="password" onChange={handlePass} name="password" placeholder="Enter password" required className="w-10/12 border border-gray-500 p-1 rounded" />
            <button onClick={handleCheck} className="my-3 bg-blue-500 text-white py-2 px-5 rounded">Create Account</button>
            <h1>Already have an account? <Link to={"/"} className="text-green-700">Login</Link></h1>
        </div>
    </div>)
}

export default Signup