require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

PORT = process.env.PORT

var users = [
    {
        uname : "Reizon",
        upass : 123
    }
]

app.post("/login", (req,res) =>
{
    console.log(req.body.username)
    console.log(req.body.password)

    const {username,password} = req.body

    const finduser = users.find((user) =>
    {
        return(
            user.uname === username
        )
    })

    if(!finduser)
    {
        return(
            res.status(401).send("User not found")
        )
    }
    
    if(finduser && finduser.upass != password)
    {
        return(
            res.status(404).send("Wrong password")
        )
    }

    res.send(true)
})

app.post("/signup", (req,res) =>
{
    console.log(req.body.username)
    console.log(req.body.password)

    const {username,password} = req.body
    const user = {"uname":username,"upass":password}
    
    users.push(user)
    console.log(users)
    res.send(true)
})

app.listen(PORT, () =>
{
    console.log(`Server Started at port number ${PORT}.....`)
})