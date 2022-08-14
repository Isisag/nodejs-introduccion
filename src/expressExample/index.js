const express = require("express")
const morgan = require("morgan")

const { routes: { userRouter } } = require("./network")
const response = require("./network/routes/response")

const app = express();
const PORT = process.env.PORT


app.use(express.json()) //metodo que parsea el body de una respuesta
app.use(userRouter); // ruta de user funcionando en servidor
app.use(morgan("dev"))


app.use((req,res,next)=>{
    response({
        message: "This route does not exists",
        res,
        status: 404
    })
})

app.listen(PORT, ()=> {
    console.log(`Server runing at port: ${PORT}`)
})





