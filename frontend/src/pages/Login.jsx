import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {
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
        var logindetails = axios.post(`${API}/login`, { username: user, password: pass })
        logindetails.then((success) => {
            console.log(success)
            if (success.data === true) {
                navigate("/success")
            }
        }).catch((error) => {
            if (error.response && error.response.status === 401) {
                setMessage("You don't have an account. Please signup")
                setTimeout(() => {
                    navigate("/signup")
                }, 1000)
            } else if (error.response && error.response.status === 404) {
                setMessage("You entered wrong password. Please try again")
                setTimeout(() => {
                    navigate("/failed")
                }, 1000)
            }
        })
    }

    return (<div className="bg-gradient-to-br from-blue-700 to-yellow-300 h-screen flex flex-col justify-center items-center">
        <div className="bg-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/4 p-5 text-center rounded shadow-xl">
            <h1 className="text-2xl font-bold">Login Page</h1>
            {message && <p className="fixed top-5 right-5 bg-red-500 text-white px-5 py-2 rounded shadow-lg">{message}</p>}
            <input type="email" onChange={handleUser} name="username" placeholder="Enter username" required className="w-10/12 border border-gray-500 p-1 rounded my-3" />
            <input type="password" onChange={handlePass} name="password" placeholder="Enter password" required className="w-10/12 border border-gray-500 p-1 rounded" />
            <button onClick={handleCheck} className="my-3 bg-blue-500 text-white py-2 px-5 rounded w-1/4 sm:w-fit">Login</button>
            <h1>Don't have an account? <Link to={"/signup"} className="text-blue-700">Signup</Link></h1>
        </div>
    </div>)
}

export default Login