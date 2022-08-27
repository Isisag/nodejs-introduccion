const { nanoid } = require("nanoid");
const articles = require("./articles");


const users = [
    {
        id: nanoid(),
        name: "isis",
        email: "isis@gmail.com",
        articles: articles
    }
]

module.exports = users;


/**
 * todo: cada usuario deberia tener una lista de productos 
 * todo: cada producto debería tener -> id, nombre, marca, descripcion, valor, stock, cantidad, 
 * *con nanoid se va a generar un id único por cada producto lo que sería un problema para la cantidad
 * todo: para el atributo cantidad si se repite el id debería aumentarse la cantidad, partiendo en 1
 * 
 */