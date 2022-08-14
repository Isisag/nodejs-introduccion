const { response } = require("express");
const express = require("express")
const morgan = require("morgan")

const { userRouter } = require("./routes")

// 

const app = express();
const PORT = process.env.PORT
//Midleware
// const fooMiddleware = (req,res,next) => {
//     req.foo = "bar"
//     next();
// }

app.use(express.json()) //metodo que parsea el body de una respuesta
app.use(userRouter); // ruta de user funcionando en servidor
app.use(morgan("dev"))



app.get("/", (req,res) => {
    // fooMiddleware,
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

app.use((req,res,next)=>{
    response({
        message: "This rout does not exists",
        res,
        status: 404
    })
})





