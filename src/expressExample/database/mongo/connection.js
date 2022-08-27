//CONEXION A MONGO
const { connect, connection } = require('mongoose')

const dbConnection = () => {
   

    //conection es un emitidor y escuchador de objetos
    connection.on('connected', () => {
        console.log('MongoDb connection established')
    })
    connection.on('reconnected', () => {
        console.log('MongoDb connection reconnected')
    })
    connection.on('close', () => {
        console.log('MongoDb connection established')
    })
    connection.on('error', (error) => {
        console.log('MongoDb connection error')
        console.log(error)
    })

     // configs de mongoose
     const connectionConfig = {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    return {
        // uri de mongo y objeto conexion
        connect: () => connect(process.env.MONGO_URI, connectionConfig),
        disconnect: () => connection.close()
    }

}

module.exports =  dbConnection 