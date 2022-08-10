const express = require("express")
const PORT = process.env.PORT
const morgan = require("morgan")

const app = express()
app.use(morgan("dev"))
app.get("/", (req,res) => {

    // req.foo = 'bar'
    res.send({
        message: "Hola mundo desde express !",
        // foo: req.foo
    })
})

app.post("/", (req,res) => {

    // req.foo = 'bar'
    res.send({
        message: "Hola mundo desde express !",
        method: "POST"
        // foo: req.foo
    })
})

app.listen(PORT, ()=> {
    console.log(`Server runing at port: ${PORT}`)
})