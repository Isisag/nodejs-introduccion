const express = require('express');
const morgan = require('morgan');

const { userRouter, urlRouter } = require('./routes');
const { articleRouter } = require('./routes');
const { mongo: { dbConnection } } = require('../database')
const response = require('./routes/response');
const applyRoutes = require('./router');

const PORT = process.env.PORT

// PAtron de diseño singleton
class Server{

    #app
    #connection
    #server

    constructor(){
        this.#app = express()
        this.#connection = dbConnection()
        this.#config()
    }

    #config(){ // metodo privado de js
        this.#app.use(express.json())
        this.#app.use(morgan('dev'))
        this.#app.use(express.urlencoded({extended: false}))
        applyRoutes(this.#app)
    }

    //*metodos publicos
    async start(){
        try {
            this.#connection.connect()
            this.#server = this.#app.listen(PORT, ()=> {console.log("Server run at port" + PORT)})
        } catch (error) {
            console.log(error)            
        }
    }

    async stop(){
        try {
            await this.#connection.disconnect()
            this.#server?.close()
        } catch (error) {
            console.log(error)
        }
    }

}

const server = new Server();

module.exports = server