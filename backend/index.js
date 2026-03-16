const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

PORT = process.env.PORT

const users = [{
    username: "Reizon",
    password: "Reiz@2003"
}]

app.post("/login", (req, res) => {
    const { username, password } = req.body

    const finduser = users.find((user) => {
        return (
            user.username === username
        )
    })

    if (!finduser) {
        return (
            res.status(401).status("User not found")
        )
    }
    if (finduser && finduser.password !== password) {
        return (
            res.status(404).send("Wrong password")
        )
    }

    res.send(true)
})

app.post("/signup", (req, res) => {
    const { username, password } = req.body
    const user = {"username":username, "password":password}

    users.push(user)
    res.send(true)
})

app.get("/", (req, res) => {
    res.send("Backend Connected...")
})

app.listen(PORT, () => {
    console.log(`Server started at port number ${PORT}`)
})
