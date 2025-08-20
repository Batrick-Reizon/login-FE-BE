import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Success from "./pages/Success"
import Failed from "./pages/Failed"

function App()
{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login></Login>}></Route>
                <Route path={"/signup"} element={<Signup></Signup>}></Route>
                <Route path={"/success"} element={<Success></Success>}></Route>
                <Route path={"/failed"} element={<Failed></Failed>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App